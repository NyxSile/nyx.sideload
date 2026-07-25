import os
import zipfile
import shutil
import subprocess
import plistlib
from cryptography.hazmat.primitives.serialization import pkcs12, Encoding, PrivateFormat, NoEncryption

# Paths
rcodesign_path = os.path.abspath("apple-codesign-extracted/apple-codesign-0.29.0-i686-pc-windows-msvc/rcodesign.exe")
certs_dir = "certificates"
ipas_dir = "ipas"
temp_dir = "temp_signing"

# Certificates mapping
certs = [
    {
        "name": "jiangsu-simcere",
        "zip": os.path.join(certs_dir, "Jiangsu Simcere Pharmaceutical Co.,Ltd (workone).zip"),
        "p12_filename": "Jiangsu Simcere Pharmaceutical Co.,Ltd (workone).p12",
        "prov_filename": "Jiangsu Simcere Pharmaceutical Co.,Ltd (workone).mobileprovision"
    },
    {
        "name": "moving-increasingly",
        "zip": os.path.join(certs_dir, "Moving Increasingly Interconnected Technology Co., Ltd (com.oa11).zip"),
        "p12_filename": "Moving Increasingly Interconnected Technology Co., Ltd (com.oa11).p12",
        "prov_filename": "Moving Increasingly Interconnected Technology Co., Ltd (com.oa11).mobileprovision"
    },
    {
        "name": "vietnam-airlines",
        "zip": os.path.join(certs_dir, "VIETNAM AIRLINES JSC (VNA Discovery).zip"),
        "p12_filename": "VIETNAM AIRLINES JSC (VNA Discovery).p12",
        "prov_filename": "VIETNAM AIRLINES JSC (VNA Discovery).mobileprovision"
    },
    {
        "name": "vietnam-rubber",
        "zip": os.path.join(certs_dir, "Viet Nam Rubber Group Limited.zip"),
        "p12_filename": "Viet Nam Rubber Group Limited.p12",
        "prov_filename": "Viet Nam Rubber Group Limited.mobileprovision"
    }
]

# Apps to sign
apps = [
    {
        "name": "esign",
        "src": os.path.join(ipas_dir, "esign", "esign_unsigned.ipa"),
        "dest_pattern": os.path.join(ipas_dir, "esign", "esign-{cert_name}.ipa")
    },
    {
        "name": "ksign",
        "src": os.path.join(ipas_dir, "ksign", "ksign.ipa"),
        "dest_pattern": os.path.join(ipas_dir, "ksign", "ksign-{cert_name}.ipa")
    }
]

def sign_app(app_src, cert_zip, p12_name, prov_name, dest_ipa):
    print(f"\n--- Signing {app_src} using {cert_zip} ---")
    
    # 1. Clean and recreate temp directories
    shutil.rmtree(temp_dir, ignore_errors=True)
    os.makedirs(temp_dir, exist_ok=True)
    
    temp_extract = os.path.join(temp_dir, "extracted")
    temp_certs = os.path.join(temp_dir, "certs")
    os.makedirs(temp_extract, exist_ok=True)
    os.makedirs(temp_certs, exist_ok=True)
    
    # 2. Extract certificate files and convert P12 to PEM in memory
    print("[+] Extracting and converting certificate to PEM...")
    with zipfile.ZipFile(cert_zip, 'r') as z:
        p12_data = z.read(p12_name)
        prov_data = z.read(prov_name)
        
    # Write provisioning profile temporarily
    prov_path = os.path.join(temp_certs, prov_name)
    with open(prov_path, "wb") as f:
        f.write(prov_data)
        
    try:
        # Load and parse PKCS12 using cryptography library
        private_key, certificate, additional_certificates = pkcs12.load_key_and_certificates(p12_data, b'NexCerts')
        
        # Serialize to unencrypted PEM format
        pem_data = b""
        if private_key:
            pem_data += private_key.private_bytes(
                encoding=Encoding.PEM,
                format=PrivateFormat.PKCS8,
                encryption_algorithm=NoEncryption()
            )
        if certificate:
            pem_data += certificate.public_bytes(Encoding.PEM)
        if additional_certificates:
            for cert_obj in additional_certificates:
                pem_data += cert_obj.public_bytes(Encoding.PEM)
                
        pem_path = os.path.join(temp_certs, "identity.pem")
        with open(pem_path, "wb") as f:
            f.write(pem_data)
            
    except Exception as e:
        print(f"[-] Error: Failed to parse or convert P12 certificate: {e}")
        return False
        
    # 3. Extract IPA and save file permissions
    print("[+] Extracting source IPA and mapping POSIX attributes...")
    permissions = {}
    with zipfile.ZipFile(app_src, 'r') as z:
        for info in z.infolist():
            permissions[info.filename] = info.external_attr
            z.extract(info, temp_extract)
            
    # 4. Locate the .app folder
    payload_dir = os.path.join(temp_extract, "Payload")
    if not os.path.exists(payload_dir):
        print("[-] Error: Payload directory not found in IPA!")
        return False
        
    app_folders = [d for d in os.listdir(payload_dir) if d.endswith(".app")]
    if not app_folders:
        print("[-] Error: No .app folder found in Payload!")
        return False
        
    app_dir_name = app_folders[0]
    app_path = os.path.join(payload_dir, app_dir_name)
    print(f"[+] Found app bundle: {app_dir_name}")
    
    # 5. Remove old code signature
    code_sig_path = os.path.join(app_path, "_CodeSignature")
    if os.path.exists(code_sig_path):
        print("[+] Removing old _CodeSignature...")
        shutil.rmtree(code_sig_path)
        
    # 6. Copy new mobileprovision profile
    dest_prov_path = os.path.join(app_path, "embedded.mobileprovision")
    print(f"[+] Copying {prov_name} to embedded.mobileprovision...")
    shutil.copy2(prov_path, dest_prov_path)
    
    # 7. Run rcodesign tool to sign the .app folder using --pem-file
    print("[+] Running rcodesign to sign the app bundle...")
    cmd = [
        rcodesign_path,
        "sign",
        "--pem-file", pem_path,
        app_path
    ]
    
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("[-] Error running rcodesign:")
        print(res.stdout)
        print(res.stderr)
        return False
    else:
        print("[+] App successfully signed with rcodesign!")
        
    # 8. Repackage into a new signed IPA
    print("[+] Repackaging into signed IPA and restoring POSIX attributes...")
    
    # Find CFBundleExecutable from Info.plist to identify main binary
    info_plist_path = os.path.join(app_path, "Info.plist")
    main_binary = None
    if os.path.exists(info_plist_path):
        try:
            with open(info_plist_path, 'rb') as fp:
                info_plist = plistlib.load(fp)
                main_binary = info_plist.get('CFBundleExecutable')
        except Exception as e:
            print(f"[!] Warning: Could not parse Info.plist: {e}")
            
    print(f"[+] Main executable identified as: {main_binary}")
    
    with zipfile.ZipFile(dest_ipa, 'w', zipfile.ZIP_DEFLATED) as z_out:
        for root, dirs, files in os.walk(temp_extract):
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, temp_extract).replace('\\', '/')
                
                # Retrieve original zip attribute or determine default
                orig_attr = permissions.get(rel_path)
                if orig_attr is None:
                    # Set execute permission for main binary and frameworks/dylibs
                    is_exe = (main_binary and file == main_binary) or \
                             ("Frameworks/" in rel_path) or \
                             file.endswith(".dylib")
                    orig_attr = (0o755 << 16) if is_exe else (0o644 << 16)
                    
                info = zipfile.ZipInfo(rel_path)
                info.external_attr = orig_attr
                
                # Write file content
                with open(full_path, 'rb') as f_in:
                    z_out.writestr(info, f_in.read())
                    
    print(f"[+] Signed IPA successfully saved to: {dest_ipa}")
    return True

def main():
    print("=== STARTING BATCH CODESIGNING ===")
    
    # Ensure dest directories exist
    os.makedirs(os.path.join(ipas_dir, "esign"), exist_ok=True)
    os.makedirs(os.path.join(ipas_dir, "ksign"), exist_ok=True)
    
    success_count = 0
    total_count = len(apps) * len(certs)
    
    for app in apps:
        for cert in certs:
            dest_file = app["dest_pattern"].format(cert_name=cert["name"])
            ok = sign_app(
                app_src=app["src"],
                cert_zip=cert["zip"],
                p12_name=cert["p12_filename"],
                prov_name=cert["prov_filename"],
                dest_ipa=dest_file
            )
            if ok:
                success_count += 1
                
    # Clean up temp files
    shutil.rmtree(temp_dir, ignore_errors=True)
    
    # Clean up diagnostic files
    if os.path.exists("test.pem"):
        os.remove("test.pem")
    
    print("\n=== CODESIGNING COMPLETE ===")
    print(f"Successfully signed {success_count}/{total_count} IPAs!")

if __name__ == "__main__":
    main()
