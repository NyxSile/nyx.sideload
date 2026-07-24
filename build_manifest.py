import os
import glob
import zipfile
import plistlib
import json

# 1. Find all IPA files
ipa_files = glob.glob('*.ipa')
if not ipa_files:
    print("No .ipa files found!")
    exit(1)

# Sort by modification time to identify the latest
ipa_files_sorted = sorted(ipa_files, key=os.path.getmtime)
latest_ipa = ipa_files_sorted[-1]
print(f"IPAs found: {ipa_files}")
print(f"Latest IPA (fallback): {latest_ipa}")

# Read config.env for configurations
config = {
    "BASE_URL": "https://sideload.nyxsile.lol",
    "KSIGN_NAME": "KSign",
    "KSIGN_BUNDLE": "nya.asami.ksign",
    "ESIGN_NAME": "ESign",
    "ESIGN_BUNDLE": "p3.xyz.yyyue.esign",
    "NSIGN_NAME": "N.Sign",
    "NSIGN_BUNDLE": "nya.asami.nsign"
}

if os.path.exists("config.env"):
    with open("config.env", "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, val = line.split("=", 1)
                config[key.strip()] = val.strip().strip('"').strip("'")

base_url = config.get("BASE_URL")
print(f"Loaded config: {config}")

if not os.path.exists("template.plist"):
    print("template.plist not found!")
    exit(1)

with open("template.plist", "r", encoding="utf-8") as f:
    template = f.read()

version_data = {}
latest_metadata = {}

# Process each IPA
for ipa in ipa_files:
    print(f"Processing IPA: {ipa}")
    try:
        with zipfile.ZipFile(ipa, 'r') as z:
            plist_path = [name for name in z.namelist() if name.startswith('Payload/') and name.endswith('.app/Info.plist')]
            if not plist_path:
                print(f"Could not find Info.plist inside {ipa} payload!")
                continue
            plist_data = z.read(plist_path[0])

        plist = plistlib.loads(plist_data)
        bundle_id = plist.get('CFBundleIdentifier')
        version = plist.get('CFBundleShortVersionString') or plist.get('CFBundleVersion', '1.0')
        app_name = plist.get('CFBundleDisplayName') or plist.get('CFBundleName', 'App')

        # Override metadata for tool stubs to ensure correct display during installation
        if ipa.startswith('esign'):
            app_name = config.get("ESIGN_NAME", "ESign")
            bundle_id = config.get("ESIGN_BUNDLE", "p3.xyz.yyyue.esign")
        elif ipa.startswith('ksign'):
            app_name = config.get("KSIGN_NAME", "KSign")
            bundle_id = config.get("KSIGN_BUNDLE", "nya.asami.ksign")
        elif ipa.startswith('nsign'):
            app_name = config.get("NSIGN_NAME", "N.Sign")
            bundle_id = config.get("NSIGN_BUNDLE", "nya.asami.nsign")
            version = "1.0.0"  # Force N.Sign version

        print(f"  App Name: {app_name}")
        print(f"  Bundle ID: {bundle_id}")
        print(f"  Version: {version}")

        ipa_url = f"{base_url}/{ipa}"
        manifest_content = template.replace("__IPA_URL__", ipa_url)\
                                   .replace("__BUNDLE_ID__", bundle_id)\
                                   .replace("__VERSION__", version)\
                                   .replace("__APP_NAME__", app_name)

        ipa_name_no_ext = os.path.splitext(ipa)[0]
        out_manifest_name = f"manifest-{ipa_name_no_ext}.plist"
        with open(out_manifest_name, "w", encoding="utf-8") as f:
            f.write(manifest_content)
        print(f"  Wrote manifest to: {out_manifest_name}")

        # Store metadata
        app_meta = {
            "version": version,
            "app": app_name,
            "bundle": bundle_id,
            "ipa": ipa
        }
        version_data[ipa_name_no_ext] = app_meta

        # Keep track of latest for fallback and GH outputs
        if ipa == latest_ipa:
            latest_metadata = app_meta
            # Write fallback manifest.plist
            with open("manifest.plist", "w", encoding="utf-8") as f:
                f.write(manifest_content)
            print("  Wrote fallback to: manifest.plist")

    except Exception as e:
        print(f"Error processing {ipa}: {e}")

# Include global configurations in version data
version_data["base_url"] = base_url
version_data["latest"] = latest_metadata

# Write version.json
with open("version.json", "w", encoding="utf-8") as f:
    json.dump(version_data, f, indent=2, ensure_ascii=False)

# Write output variables for GitHub Actions step for the latest IPA
github_output = os.environ.get('GITHUB_OUTPUT')
if github_output and latest_metadata:
    with open(github_output, 'a') as f:
        f.write(f"app_name={latest_metadata['app']}\n")
        f.write(f"version={latest_metadata['version']}\n")
        f.write(f"ipa_name={latest_metadata['ipa']}\n")

print("All manifests and version.json rebuilt successfully!")
