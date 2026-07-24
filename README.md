# nyx.sideload

**nyx.sideload** (former *Nyx.Dylib*) — has resurrected with a new face.

An elegant, modern sideloading portal for iOS devices, featuring a glassmorphic user interface, automated manifest build actions, anti-revoke utility profiles, and an interactive local browser-based signature simulator (N.Sign).

## Features

- **Redesigned Sideloading Portal**: Sleek visual layouts with premium dark styling for ESign, KSign, and N.Sign.
- **Dynamic Installer Modal**: Responsive installer that detects user-agent/iPadOS platforms (bypassing desktop mode spoofing) to offer OTA installation on touch devices or direct `.ipa` downloads on desktop.
- **Unified Configurations**: Centrally managed configurations in `config.env` propagated dynamically down to manifest plists and frontend templates via `version.json`.
- **N.Sign Web-Signer**: A client-side simulator showing the signature injection process, custom dylib/tweak bundling, and custom bundle ID management.
- **DNS Block profile**: Easy configuration link to block Apple certificate verification checks to prevent app revocations.
- **Header theme customizer**: A dedicated painting-palette icon in the top-right header that opens a theme settings modal, allowing users to customize the website accent styling dynamically (Violet, Cyberpink, Dark Gold, Emerald) synchronized across tabs.
- **Clean File Organization**: Plists are organized cleanly inside a dedicated `plists/` folder, and IPAs are nested recursively under `ipas/` subdirectories.

## Repository Structure

- `/ipas/` — Contains categorized `.ipa` binaries (ESign, KSign, N.Sign).
- `/plists/` — Contains automatically generated Apple OTA plist configuration files.
- `/certificates/` — Imported developer certificate archives.
- `index.html` — The main landing page.
- `build_manifest.py` — Python script that automatically generates OTA manifest plist configurations for all IPAs.
- `config.env` — Global app version and base URL configuration file.
