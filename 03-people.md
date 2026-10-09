# People and face scanning

**People** organizes faces detected in indexed photos. Face scanning is a separate, optional local analysis job; it is not required to browse files or use basic semantic search.

## Start a face scan

1. Open **People**.
2. Review the face-indexing status and any existing groups.
3. Choose **Start face indexing** when you want Silo to analyze available indexed photos.
4. Let the face model load and the scan process photos. New clusters may appear as the scan advances.
5. Pause the scan if you want to reduce background work or review the photos first. Resume later from the same page.

Face indexing waits for searchable/indexed photos as needed. A zero or incomplete People view can mean there are no indexed faces yet, the source is unavailable, or the face scan has not run; it does not prove the photos contain no faces.

## Review and name a group

- Open a cluster to inspect its photos before giving it a name.
- Use **New Person** to create a named profile. Rename a person when you need to correct the label.
- Confirm identities only after reviewing the group. Face matching is a suggestion and can confuse similar-looking people, partial faces, old photos or occlusions.
- Right-click or Shift-click a photo to inspect detected faces and correct an assignment. You can add, remove, or reassign a detected face where the controls are available.
- Merge profiles only after checking both groups. A merge moves the source profile's assignments into the chosen person; the source profile is removed. Silo documents undo with **⌘Z** after confirmation, but inspect the resulting group before continuing.
- Select a cover photo if the profile's default image is not useful.

## Confirmed faces and banned people

The **Confirmed faces** view separates reviewed profiles and includes the Banned people area. **Ban** hides matching photos from the library view; it does not alter or erase the original files. Settings control whether banned or explicit-content photos can appear elsewhere. Use **Show faces** in the banned area when you need to review the face-level records there.

## Privacy and limits

Face detection, descriptors and clusters are stored in Silo's local cache. The feature does not identify a real-world name on its own; you supply names and confirm matches. Results depend on image quality, face angle, occlusion and model behavior. People scanning can be one of the heavier background jobs, so run it separately from other intensive tasks when responsiveness matters.

If a scan reports a model or indexing error, see [People scan troubleshooting](12-troubleshooting.md#people-scan-is-empty-or-stalled).
