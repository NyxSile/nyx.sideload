# nyx.sideload

A sleek, static web portal for OTA (Over-the-Air) iOS sideloading. Instantly install ESign, KSign, and N.Sign directly from your browser.

[Русская версия](README.ru.md)

[![Deploy](https://github.com/NyxSile/nyx.sideload/actions/workflows/build.yml/badge.svg)](https://github.com/NyxSile/nyx.sideload/actions/workflows/build.yml)

## 🚀 Features

- **OTA Sideloading** – Install ESign, KSign, and N.Sign directly to your iOS device.
- **Anti-Revoke DNS** – Features an optimized DNS profile configuration (`dns.mobileconfig`) to block Apple's revocation servers.
- **Breeze Guide** – Built-in step-by-step sideloading guide in `/tutorial`.
- **N.Sign Promo** – Promotion overlay encouraging sideloading exploration.
- **Buttery-Smooth UI** – Responsive glassmorphic layout, customizable themes, and GPU-accelerated backdrop animations.

## 📂 Repository Layout

```text
.
├── ipas/             # Pre-signed iOS application packages (.ipa)
├── plists/           # OTA XML installation manifests (.plist)
├── icons/            # Portal and tutorial image assets
├── tutorial/         # Step-by-step sideloading guide
├── 404.html          # Custom error page re-routing to home
├── index.html        # Main landing page
├── index.css         # Styling system
├── index.js          # Core JavaScript logic
└── version.json      # Dynamic metadata for version and size matching
```

> [!NOTE]
> Certificates, signing utilities, templates, and environment files (`certificates/`, `sign_apps.py`, `build_manifest.py`, `config.env`) are kept local and ignored by Git for security and repository cleanliness.
