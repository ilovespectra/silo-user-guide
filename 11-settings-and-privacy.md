# Settings, storage and privacy

## Appearance and behavior

**Settings → Appearance & behavior** offers **System**, **Dark** and **Light** themes. System follows macOS appearance. Map options control automatic globe rotation and optional preload of local day/night textures.

## Silo cache destination

The cache contains generated data such as search/face/location indexes, thumbnails and previews. **Choose cache destination** lets you select an external folder. Silo verifies the copied cache before removing the prior copy, then restarts when needed. Keep the destination mounted while using Silo. The fallback option preserves a 10 GB free-space reserve; turn it off if you prefer indexing to pause when the external cache drive is absent.

Changing the cache destination does not move your original folders or change Silo settings. Do not manually delete an index folder while Silo is running.

## Memories storage

The Memories setting selects where generated movies and their support files are written. It does not move source media. Check available disk space before exporting long videos.

## Configuration backup and restore

Backup & restore can export Silo configuration and indexed knowledge. The export can contain sign-in tokens, so treat it like a secret and store it privately. Review an import before applying: restoring replaces the current Silo setup and restarts the app. It does not modify source media; phone backups are not included.

## Content protection

Content protection controls visibility of explicit images and banned people, Safe Search behavior and authorization for protected changes. Explicit images are hidden and excluded from search by default. Banned people are hidden according to the relevant settings. If a parental password is enabled, Silo asks for it before protected changes; the password itself is not stored, only a verifier. Keep the password somewhere safe.

## Share a library on trusted Wi-Fi

Settings → **Share a library** publishes selected indexed local libraries to a link on your private network. People with that link on the network can browse, search, preview and download included photos and videos. It does not share all Silo tools.

The link uses **unencrypted local HTTP**. Only enable it on a trusted private Wi-Fi network; do not forward the link, expose the port to the internet, or use it on public Wi-Fi. Stop sharing or quit Silo to end access.

## Feedback and screenshots

Silo's report-a-problem workflow may attach a screenshot of the Silo window if you choose that option. Inspect screenshots for faces, filenames, paths, account names and other personal details before sending. Sharing a support report is a separate, deliberate action.
