# Troubleshooting

## Search index does not become ready

1. In Files, read the exact stage/status text. Opening saved records, warming CLIP and discovering new files are different stages.
2. Check **Settings → Silo Cache Destination** and confirm the volume is mounted and has free space.
3. Wait for a large index to make progress; avoid starting face scanning or memory export at the same time.
4. If indexing service status says it is reconnecting, leave Silo open briefly for its automatic retry or restart Silo once.
5. Use the stage retry control only for a stage shown as retryable. Do not delete cache folders by hand.
6. If it remains unavailable, capture the visible error and include the Silo version and Mac chip in a private support report.

A `0%` saved-index opening indicator is not the same as “no files found.” A library item count is not the number of files with finished CLIP embeddings.

## Search returns nothing or misses recent files

- Make sure the source is selected and still available.
- Check whether **Search** indexing has reached the relevant files.
- Try a visual description, loosen confidence, and remove restrictive filters.
- Remember that visual CLIP search is not guaranteed OCR of document text.
- For Google Photos, confirm you selected the item in the Picker and the selection is still available.

## Thumbnails or previews are blank

- Confirm the original source is connected and readable.
- Wait for the thumbnail/preview stage; Silo can index a file before its preview is ready.
- Try opening the original from its source. Unsupported, corrupt, encrypted or very large files may not decode.
- If a removable cache drive is missing, reconnect it and let Silo verify recovery before manually changing folders.

## Mac is warm or Silo is sluggish

Initial discovery and media indexing can use CPU and disk. Pause a running face scan from People. Avoid simultaneous large memory exports and backup verification. If the Mac remains uncomfortably warm, quit Silo; the local index can continue later. Report the build and indexing stage so performance can be diagnosed.

## People scan is empty or stalled

- Confirm photos are indexed and readable first.
- Open People and explicitly start the optional face scan.
- Check the face-index progress and error message; retry only if offered.
- Pause and resume the scan from People if needed. Review clusters manually; do not assume a match is certain.

## Map has no photos

The photos may not have embedded GPS coordinates, or Location indexing may still be running. Refresh/rescan after new files are indexed. Changing a place requires a deliberate selection and apply step.

## Duplicate scan finds no groups

Duplicate review finds exact-content matches, not similar images. Confirm the scan completed and intended sources are available. Resized or recompressed copies are not byte-identical and may not be grouped.

## Phone is not detected

- Use a data-capable cable and connect directly if a hub is suspect.
- On iPhone/iPad: unlock the device, choose **Trust This Computer**, and reconnect.
- On Android: enable USB debugging, select file-transfer mode if required and approve the debugging computer prompt.
- Confirm required tools are installed (`libimobiledevice` for iOS connection, Android platform tools/`adb` for Android).
- iOS will not expose the entire protected filesystem to Silo.

## Google sign-in fails

Check that the build has supported OAuth credentials, the correct Google APIs/scopes are enabled and the signed-in account is an allowed test user if the app remains in testing mode. Reconnect an expired/revoked session. Never paste a client secret or access token into a public issue or chat.

## Time Machine appears empty

Grant Full Disk Access to the actual Silo app in macOS Privacy & Security settings, then quit and reopen Silo. A development build may require granting access to Electron. See [Backups and Time Machine](10-backups.md#time-machine).

## macOS blocks the installer

Verify the download checksum and ensure it came from the official Silo release source. A verified unsigned preview may need the per-app **Open Anyway** action. If macOS says “damaged” or “will damage your computer,” do not bypass it—download again and ask support.

## Report a useful bug

Include: Silo version shown in About or the installer, Mac chip (Intel/Apple silicon), macOS version, the active source type, the exact progress stage, steps to reproduce, and a screenshot with private names/photos/paths removed. Do not attach config backup exports; they can contain tokens.
