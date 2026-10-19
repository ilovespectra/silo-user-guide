# Compatibility and known limits

## Current build and guide review

Use [Silo Downloads → Latest release](https://github.com/ilovespectra/silo-downloads/releases/latest) for the current stable build, its architecture-specific installers, checksums, and release notes. The guide website reads the current release tag from Silo Downloads when online and keeps this rolling release link available if GitHub's API cannot be reached. This guide does not hard-code the current app version.

The guide content was reviewed on **October 19, 2026** against the latest stable release available at that time. This is a source and documentation review, not a fresh installation or end-to-end test of every installer. The current-release link can advance automatically; the review date changes only when the guide content is checked again.

The Mac build configuration declares a minimum macOS version of **11.0**. A configured minimum is not proof that every bundled native dependency and workflow works on that OS. The repository also configures separate Intel and Apple silicon Mac artifacts and a Windows x64 installer. Build configuration alone is not compatibility testing: check the release notes and test each installer on its target hardware and operating system.

## Reliability and feature behavior

- Startup can use a local cache fallback when a saved external cache destination is missing or unresponsive. Keep the external destination and its cache data intact; follow Silo's recovery status and reconnect the destination when available. This behavior does not make an unavailable original media source readable.
- Search, face analysis, location extraction, duplicate hashing, audio inventory, and preview generation are separate jobs. Progress in one stage does not mean the others have finished.
- Memories can search indexed media by topic and prepare editable stories in the background. Review the generated story, soundtrack, and clip-audio mix before saving. A source review does not prove that every library or generated video will include audible music on every machine.
- Face clusters are model suggestions and need human review. Face angle, lighting, occlusion, and image quality affect results.
- Map uses available location metadata; it does not infer GPS from scene content alone.
- Duplicate review finds exact file-content matches, not visually similar or edited copies.
- Digital Folders refer to originals; an offline reference does not make an unavailable original readable.
- iOS connection is limited to Apple's exposed media area; Android requires USB debugging authorization. Phone restore archives and browseable snapshots are separate features.
- Google Photos provides only items selected through Google Photos Picker and is read-only. Google Drive requires network access and configured OAuth.
- Local library sharing uses unencrypted HTTP and should stay on trusted private Wi-Fi.
- Configuration backups can contain access tokens; phone backups are a separate data set.
- Exported movies, previews, and caches need additional disk space.

## Build compatibility checklist

Before describing a particular installer as compatible, record its exact filename and checksum, app bundle version, CPU architecture, operating system version, device model, launch result, core workflows tested, and known failures. Test Intel and Apple silicon Mac builds on real hardware; do not infer one architecture's behavior from the other.
