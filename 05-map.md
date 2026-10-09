# Map and photo locations

**Map** groups photos with usable embedded GPS metadata into location clusters and shows them on a globe. It uses coordinates read from files; it does not infer a location from visual content alone.

## Prepare and browse the map

1. Make sure the relevant photos are accessible and allow the **Locations** indexing stage to read their metadata.
2. Open **Map** and wait for its location data and globe assets to load.
3. Refresh/rescan when you have added photos or changed embedded location metadata.
4. Open a region or location bubble to inspect the associated photos.
5. Use the region tools to select items. Rectangle/circle selection supports additive or subtractive gestures described by the on-screen help.
6. Search or sort within a region and open a photo to confirm the selection.

## Change a photo's location

1. Select the intended photos.
2. Choose **Relocate**.
3. Search for a place or choose **Use embedded location** in the location picker.
4. Check both the selected items and the proposed location.
5. Apply only after confirming the selection is correct.

Relocation changes location metadata or Silo's location assignment according to the selected action; it does not move the file to another folder. Review before applying because coordinates can be sensitive personal information.

## Globe controls

- The compass resets the view north-up.
- Pause/resume controls affect globe rotation only.
- Solar-time controls change the displayed day/night boundary. They do not edit photo metadata.
- Appearance settings can pause automatic rotation or preload local day/night map textures.

## Limits

Photos without GPS metadata do not appear in location groups until metadata is added. A location may be approximate or absent if metadata was stripped by an export or messaging app. Geocoding and map decoration can depend on local data and build configuration; the map is not a live navigation or directions service.
