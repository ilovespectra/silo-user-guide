# Compatibility and known limits

## What is verified for this guide

The feature descriptions were checked against **Silo 2.1.4**, published on **October 15, 2026** in the official GitHub release tag **v2.1.4**. This review checked source behavior and payment/paid-license tests; it did not repeat installation and full workflow testing on every supported machine.

The Mac build configuration declares minimum macOS **11.0**. A configured minimum is not proof that all bundled native dependencies and workflows work on that OS. Check the actual installer/bundle metadata and release notes for your download. The older screenshot build reported version 1.0.0 and minimum macOS 12.0; those historical labels do not describe the current release.

The repository config defines architecture-specific Mac artifacts and an x64 Windows installer target. A configured target is build intent, not a substitute for installing and testing each artifact on real Intel and Apple silicon Macs and on the supported Windows versions.

## Reliability changes through 2.1.4

Recent fixes in this release focus on memory generation stability and related reliability improvements, including x64 binary fixes and the latest main.ts updates. Earlier improvements through 2.0.10 covered startup storage, native search-index loading, semantic-index recovery and readiness, completed indexing counts, HEIC/HEIF decode fallback, and bundled phone tools.

Finished indexing reports now distinguish a small number of bad files from counter mismatches or a systemic failure rate. Normal quits also clear the running-session crash marker instead of being mistaken for crashes. These are source-level improvements, not a guarantee of zero failures.

The 2.1.4 Memories handler continues the reliability work around **Generate Memories**, keeping generation stable while the page shows live progress and placeholder cards while a replacement set is being found. Phone-tool packaging still includes iOS tools and Android `adb`; Windows iOS connections still need Apple's device service.

## Feature limitations to know

- First-run indexing and cold-start search preparation can take time; search coverage grows with completed indexing.
- CLIP is visual semantic matching. It can miss relevant items or return approximate matches; it is not a guarantee and is not general OCR.
- People groups are model suggestions and require human review. Face angle, lighting, occlusion and image quality affect results.
- Map needs location metadata; it does not infer GPS from a scene.
- Duplicate scan finds exact file-content matches, not visually similar or edited copies.
- Digital Folders refer to originals; offline references cannot make an unavailable original readable.
- iOS connection is limited to Apple's exposed media area; Android requires USB debugging authorization.
- Google Photos provides only user-picked items and is read-only. Google Drive requires network access and configured OAuth.
- Local library sharing is unencrypted HTTP and should stay on trusted private Wi-Fi.
- Configuration backups can contain access tokens; phone backups are a separate data set.
- Exported movies, previews and caches need additional disk space.

## Build compatibility checklist for a release

Before describing a particular installer as compatible, record the exact installer filename/checksum, app bundle version, CPU architecture, macOS/Windows version, Mac model/chip, launch result, core workflows tested and any known failures. Test both architecture-specific Mac builds on real hardware; do not infer Intel compatibility from Apple silicon or vice versa.
