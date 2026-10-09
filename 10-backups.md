# Backups and Time Machine

Silo has two separate ideas: its generated **cache/index** and backup **copies of original files**. Indexes and thumbnails can help Silo work; they are not a replacement for a verified backup of your photos and documents.

## Shelter copy: verified file clone

The shelter-copy flow makes a copy of selected source data onto a destination volume and verifies it. Check the selected sources, destination, available space and verification summary before starting. Do not disconnect either volume while copying or verifying.

A primary copy and a replica on another volume have separate status. A verified copy shows that its contents matched at the verification point; it does not mean that it will stay current after the source changes. Review backup age/freshness and rerun when needed.

When the preferred cache/index destination is unavailable, Silo's settled behavior is to offer local fallback while preserving at least 10 GB free space. If fallback is disabled, indexing pauses until the destination returns. Silo verifies and moves the fallback cache back automatically when the destination reconnects, with notices. This concerns generated cache data, not original file backup.

## Time Machine

Silo can browse Time Machine snapshots as sources. macOS protects some snapshot locations. If Silo reports `Operation not permitted` or shows an apparently empty snapshot, grant **Full Disk Access** to the actual Silo app in **System Settings → Privacy & Security → Full Disk Access**, then quit and reopen Silo so macOS applies the permission. Development builds may appear as **Electron** rather than Silo.

Time Machine is managed by macOS; using Silo to browse a snapshot does not by itself create a Silo shelter clone.

## Phone backups

Mobile backups create dated, browseable local copies. Compare device identifiers and dates before restoring or updating. Keep independent copies if the phone is important; a phone backup may not include every protected iOS file.

## Library Statistics

Open **Settings → Open statistics dashboard** to review inventory, source availability, per-stage indexing, and shelter-copy status. Refresh measurements before comparing totals. Use the copy/verification controls only after checking the source selection and destination.

## Good backup practice

- Keep at least one verified copy on a different physical device or volume.
- Keep important backup destinations disconnected when not in use to reduce accidental damage.
- Check age and freshness, not just the “verified” label from a prior run.
- Never permanently delete duplicate-review items until you confirm a separate backup exists.
- Keep the Silo cache out of the only copy of your originals; it can be rebuilt, originals may not be.
