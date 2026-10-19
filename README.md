# Silo User Guide

![Silo](assets/silo-logo.png)

**Your files, one local-first library.** Browse folders, drives, connected phones and selected cloud files; search photos by meaning; organize with people, places and virtual collections; review duplicates; and make memory videos.

> Guide content last reviewed on **October 19, 2026** against the latest stable Silo release available at that time. The [latest Silo build and release notes](https://github.com/ilovespectra/silo-downloads/releases/latest) always point to the current release; the guide site displays its current tag automatically. A new release does not itself mean every guide section or installer has been re-audited. Screenshots are from an earlier preview and may differ from the current layout. See [Compatibility and known limits](13-compatibility.md).

![Silo Files screen at first launch](assets/files-first-launch-redacted.jpg)

## Start here

1. [Install and take the first tour](00-getting-started.md)
2. [Add a folder and learn the Files workspace](01-files-and-sources.md)
3. [Understand indexing and semantic search](02-search-and-indexing.md)
4. [Choose the feature you need](#guide)

## Guide

- [People and face scanning](03-people.md)
- [Digital folders and offline references](04-digital-folders.md)
- [Map and photo locations](05-map.md)
- [Duplicates and safe review](06-duplicates.md)
- [Memories and story videos](07-memories.md)
- [Phones, backups and messages](08-mobile.md)
- [Google Drive and Google Photos](09-cloud-sources.md)
- [Shelter copies and Time Machine](10-backups.md)
- [Settings, storage and privacy](11-settings-and-privacy.md)
- [Troubleshooting](12-troubleshooting.md)
- [Compatibility and known limits](13-compatibility.md)
- [License, demo and support access](14-license-and-demo.md)

## What Silo does

Silo presents selected sources in a unified desktop workspace. It keeps original files where they are unless you choose an action that changes them. Search indexes, face groups, location indexes, thumbnails and other derived data are local Silo data; they are not substitutes for a backup of your originals.

Most first-run tasks take time on a large library. Finding files, preparing CLIP search, face scanning, location extraction, duplicate hashing and thumbnail generation are separate jobs. A progress bar reaching 100% for one job does not mean every other job is complete.

## Recent improvements

- **Search and indexing:** startup can recover from a missing or unresponsive cache destination, and completed search indexes can be loaded while discovery and other indexing stages continue separately. Cache recovery and search preparation still depend on the machine and available storage.
- **Memories:** automatic suggestions, topic-based searches, progress during generation, background movie preparation, and a Memory Book for finished movies. Story controls include soundtrack and original-clip-audio settings; preview the prepared movie before saving.
- **People and Map:** adjustable thumbnail size for People clusters, reviewed face assignments, clearer map counts, and collapsible map sections. Map changes require a deliberate selection and apply action.
- **Mobile and backups:** bundled phone tools, dated browseable snapshots, separate restore archives, message history/export controls, and verified Fallout Shelter file copies. Availability differs by device and operating system.
- **Licensing and updates:** computer-bound signed licenses, payment verification through the license relay, and in-place macOS updates. Check the installed app for current purchase terms.

See the individual chapters for requirements and remaining limits; these improvements do not guarantee that every file is readable or every device is supported.

## Official links

- [Try Silo website](https://trysilo.kolektivkrog.si/)
- [Latest Silo build and release notes](https://github.com/ilovespectra/silo-downloads/releases/latest)
- [Silo source code on GitHub](https://github.com/ilovespectra/Silo)

## Privacy at a glance

- Local folders are processed on the Mac. CLIP search and face detection use local models after the required model files are available.
- Google Drive and Google Photos require online Google access. Google Photos is limited to items you explicitly choose through Google Photos Picker.
- Phone browsing needs the phone connected and trusted. Silo fetches a remote phone file when you open or export it.
- A Silo library share allows people with its link on the same trusted Wi-Fi network to browse, search, preview and download the included media. It uses unencrypted local HTTP.
- Configuration exports can contain sign-in tokens. Keep them private.

## Silo look and feel

This guide uses Silo's black and orange identity. The website follows your device's light or dark appearance by default; use the theme control in the page header to switch modes at any time. The guide remains readable in both themes.
