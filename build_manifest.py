#!/usr/bin/env python3
"""
build_manifest.py
Scans 'ipas/**/*.ipa', extracts app metadata from embedded Info.plist files,
generates OTA installation manifests into 'plists/', updates 'version.json',
creates a root fallback 'manifest.plist', and exports GitHub Actions step outputs.
"""

import os
import glob
import json
import zipfile
import plistlib
import subprocess
from datetime import datetime, timezone

DEFAULT_TEMPLATE = """<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
        <dict>
            <key>assets</key>
            <array>
                <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string>__IPA_URL__</string>
                </dict>
            </array>
            <key>metadata</key>
            <dict>
                <key>bundle-identifier</key>
                <string>__BUNDLE_ID__</string>
                <key>bundle-version</key>
                <string>__VERSION__</string>
                <key>kind</key>
                <string>software</string>
                <key>title</key>
                <string>__APP_NAME__</string>
            </dict>
        </dict>
    </array>
</dict>
</plist>
"""

def load_config():
    config = {
        "BASE_URL": "https://sideload.nyxsile.lol",
        "KSIGN_NAME": "KSign",
        "KSIGN_BUNDLE": "nya.asami.ksign",
        "ESIGN_NAME": "ESign",
        "ESIGN_BUNDLE": "p3.xyz.yyyue.esign",
        "NSIGN_NAME": "N.Sign",
        "NSIGN_BUNDLE": "nyx.sideload.nsign"
    }
    if os.path.exists("config.env"):
        try:
            with open("config.env", "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line or line.startswith("#"):
                        continue
                    if "=" in line:
                        k, v = line.split("=", 1)
                        config[k.strip()] = v.strip().strip('"').strip("'")
        except Exception as e:
            print(f"[!] Warning reading config.env: {e}")
    return config

def get_updated_at(path):
    """Return the last Git commit date for a file (ISO 8601), with filesystem fallback."""
    try:
        res = subprocess.run(
            ["git", "log", "-1", "--format=%cI", "--", path],
            capture_output=True, text=True, check=False
        )
        if res.stdout.strip():
            return res.stdout.strip()
    except OSError:
        pass
    try:
        return datetime.fromtimestamp(os.path.getmtime(path), timezone.utc).isoformat()
    except OSError:
        return datetime.now(timezone.utc).isoformat()

def get_commit_timestamp(path):
    """Return epoch seconds for sorting by latest update."""
    try:
        res = subprocess.run(
            ["git", "log", "-1", "--format=%ct", "--", path],
            capture_output=True, text=True, check=False
        )
        if res.stdout.strip():
            return int(res.stdout.strip())
    except (OSError, ValueError):
        pass
    try:
        return int(os.path.getmtime(path))
    except OSError:
        return 0

def find_ipa_files():
    ipa_files = []
    if os.path.exists("ipas"):
        for root, _, files in os.walk("ipas"):
            for f in files:
                if f.endswith(".ipa"):
                    ipa_files.append(os.path.join(root, f).replace("\\", "/"))
    else:
        ipa_files = [p.replace("\\", "/") for p in glob.glob("*.ipa")]
    return sorted(ipa_files)

def main():
    ipa_files = find_ipa_files()
    if not ipa_files:
        print("[!] No .ipa files found in ipas/")
        return

    config = load_config()
    base_url = config.get("BASE_URL", "https://sideload.nyxsile.lol")
    site_generated_at = datetime.now(timezone.utc).isoformat()

    template = DEFAULT_TEMPLATE
    if os.path.exists("template.plist"):
        try:
            with open("template.plist", "r", encoding="utf-8") as f:
                template = f.read()
        except Exception as e:
            print(f"[!] Could not read template.plist, using default: {e}")

    os.makedirs("plists", exist_ok=True)

    # Sort IPAs by last commit timestamp to find the most recent
    ipa_files_sorted = sorted(ipa_files, key=get_commit_timestamp)
    latest_ipa = ipa_files_sorted[-1]
    print(f"[*] Found {len(ipa_files)} IPA files.")
    print(f"[*] Latest IPA identified: {latest_ipa}")

    version_data = {}
    latest_metadata = None
    latest_manifest_content = None

    for ipa in ipa_files:
        print(f"[*] Processing: {ipa}")
        try:
            with zipfile.ZipFile(ipa, "r") as z:
                plist_entries = [
                    n for n in z.namelist()
                    if n.startswith("Payload/") and n.endswith(".app/Info.plist")
                ]
                if not plist_entries:
                    print(f"    [!] Info.plist not found in {ipa}, skipping.")
                    continue
                plist_bytes = z.read(plist_entries[0])

            plist = plistlib.loads(plist_bytes)
            raw_bundle = plist.get("CFBundleIdentifier") or ""
            raw_version = plist.get("CFBundleShortVersionString") or plist.get("CFBundleVersion") or "1.0"
            raw_name = plist.get("CFBundleDisplayName") or plist.get("CFBundleName") or "App"

            filename = os.path.basename(ipa)
            if filename.startswith("esign"):
                app_name = config.get("ESIGN_NAME", "ESign")
                bundle_id = raw_bundle or config.get("ESIGN_BUNDLE", "p3.xyz.yyyue.esign")
                version = raw_version
            elif filename.startswith("ksign"):
                app_name = config.get("KSIGN_NAME", "KSign")
                bundle_id = raw_bundle or config.get("KSIGN_BUNDLE", "nya.asami.ksign")
                version = raw_version
            elif filename.startswith("nsign"):
                app_name = config.get("NSIGN_NAME", "N.Sign")
                bundle_id = config.get("NSIGN_BUNDLE", "nyx.sideload.nsign")
                version = "1.0.0"
            else:
                app_name = raw_name
                bundle_id = raw_bundle
                version = raw_version

            ipa_url = f"{base_url}/{ipa}"
            manifest_content = (
                template.replace("__IPA_URL__", ipa_url)
                .replace("__BUNDLE_ID__", bundle_id)
                .replace("__VERSION__", version)
                .replace("__APP_NAME__", app_name)
            )

            ipa_name_no_ext = os.path.splitext(os.path.basename(ipa))[0]
            out_manifest_path = f"plists/manifest-{ipa_name_no_ext}.plist"
            with open(out_manifest_path, "w", encoding="utf-8") as mf:
                mf.write(manifest_content)

            file_size_mb = f"{os.path.getsize(ipa) / (1024 * 1024):.1f} MB"
            app_meta = {
                "version": version,
                "app": app_name,
                "bundle": bundle_id,
                "ipa": ipa,
                "size": file_size_mb,
                "updated": get_updated_at(ipa)
            }
            version_data[ipa_name_no_ext] = app_meta

            if ipa == latest_ipa:
                latest_metadata = app_meta
                latest_manifest_content = manifest_content

        except Exception as e:
            print(f"    [!] Error processing {ipa}: {e}")

    # Fallback to first if latest not assigned
    if not latest_metadata and version_data:
        first_key = next(iter(version_data))
        latest_metadata = version_data[first_key]

    # Write root manifest.plist
    if latest_manifest_content:
        with open("manifest.plist", "w", encoding="utf-8") as f:
            f.write(latest_manifest_content)
        print("  Wrote fallback root manifest.plist")

    version_data["base_url"] = base_url
    version_data["generated_at"] = site_generated_at
    if latest_metadata:
        version_data["latest"] = latest_metadata

    with open("version.json", "w", encoding="utf-8") as f:
        json.dump(version_data, f, indent=2, ensure_ascii=False)
    print("[*] Rebuilt version.json successfully.")

    github_output = os.environ.get("GITHUB_OUTPUT")
    if github_output and latest_metadata:
        try:
            with open(github_output, "a", encoding="utf-8") as go:
                go.write(f"app_name={latest_metadata.get('app', 'App')}\n")
                go.write(f"version={latest_metadata.get('version', '1.0')}\n")
                go.write(f"ipa_name={latest_metadata.get('ipa', '')}\n")
            print(f"[*] Exported GITHUB_OUTPUT: {latest_metadata.get('app')} v{latest_metadata.get('version')}")
        except Exception as e:
            print(f"[!] Warning writing GITHUB_OUTPUT: {e}")

if __name__ == "__main__":
    main()
