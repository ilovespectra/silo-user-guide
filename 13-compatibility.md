# Compatibility and known limits

## What is verified for this guide

The feature descriptions in this guide were checked against the Silo source checkout's `package.json` version **2.0.2** on **October 9, 2026**. The actual installed app used for the screenshots reports `CFBundleShortVersionString` **1.0.0** and `LSMinimumSystemVersion` **12.0** in its bundle metadata. These are conflicting version signals.

That means the installed screenshot build's declared macOS floor is 12.0, but it does **not** prove that every Silo 2.0.2 preview has been tested on every Mac or every macOS release. Treat the 2.0.2 package's exact minimum macOS and hardware compatibility as unconfirmed until its installer metadata and release notes agree.

The repository config defines architecture-specific Mac artifacts and an x64 Windows installer target. A configured target is build intent, not a substitute for installing and testing each artifact on real Intel and Apple silicon Macs and on the supported Windows versions.

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
