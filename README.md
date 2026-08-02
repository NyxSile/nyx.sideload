# nyx.sideload

> A clean, static iOS sideloading portal for ESign, KSign and N.Sign.

[Русская версия](README.ru.md)

[![Deploy](https://github.com/NyxSile/nyx.sideload/actions/workflows/build.yml/badge.svg)](https://github.com/NyxSile/nyx.sideload/actions/workflows/build.yml)

nyx.sideload is a lightweight web portal for distributing signed iOS applications. It provides OTA installation manifests, direct IPA downloads, a DNS profile shortcut and a browser-based N.Sign tutorial/simulator.

## What is included

- **Sideloading portal** — responsive dark/glass UI in [`index.html`](index.html).
- **ESign, KSign and N.Sign** — each app has its own folder under [`ipas/`](ipas/).
- **OTA manifests** — generated plist files are kept in [`plists/`](plists/).
- **Certificate variants** — imported certificate archives are stored in [`certificates/`](certificates/).
- **N.Sign tutorial** — a standalone page in [`tutorial/`](tutorial/).
- **Automatic metadata** — [`build_manifest.py`](build_manifest.py) reads each IPA and rebuilds `version.json` and OTA manifests.

## Repository layout

```text
.
├── .github/workflows/      # GitHub Actions deployment/build workflow
├── certificates/           # Certificate archives used for IPA variants
├── ipas/
│   ├── esign/              # ESign IPA files
│   ├── ksign/              # KSign IPA files
│   └── nsign/              # N.Sign IPA files
├── plists/                 # Generated OTA installation manifests
├── tutorial/               # N.Sign tutorial page and assets
├── build_manifest.py       # IPA metadata and manifest generator
├── config.env              # Site URL and app identifiers
├── index.html              # Main portal page
├── manifest.plist          # Fallback manifest for the latest build
├── template.plist          # Manifest template used by the generator
└── version.json            # Generated app catalog consumed by the frontend
```

## How the build works

1. IPA files are discovered recursively inside `ipas/`.
2. The script reads `Payload/*/Info.plist` from every IPA.
3. App name, bundle ID and version are normalized using `config.env`.
4. A manifest is written to `plists/manifest-<ipa-name>.plist`.
5. `version.json` is regenerated for the website.
6. The newest IPA by modification time is also written to `manifest.plist`.

Run it locally with:

```bash
python build_manifest.py
```

Python 3.9+ is recommended. The script uses only the Python standard library.

## Configuration

Edit [`config.env`](config.env) to change the public URL or app identifiers. `version.json`, the files in `plists/` and the root `manifest.plist` are generated artifacts; regenerate them whenever app binaries change.

## Adding a new IPA

1. Put the file in `ipas/esign/`, `ipas/ksign/` or `ipas/nsign/`.
2. Use a descriptive filename, for example `esign-vietnam-airlines.ipa`.
3. Run `python build_manifest.py`.
4. Check the generated plist and `version.json` before publishing.

## Important security notes

- Never publish private keys, provisioning profiles or passwords.
- Treat certificate archives as sensitive distribution material and review repository access before pushing them.
- Keep `config.env` free of secrets; it is intended for public site configuration only.
- Only distribute applications and certificates you are authorized to use.

## License

See [`LICENSE`](LICENSE).


