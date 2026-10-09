# Search and indexing

Silo combines ordinary file browsing with semantic search. Search quality depends on a local index that is built over time; adding a source and seeing it in Files does not mean every item is already searchable.

## What CLIP does

Silo's semantic index uses a local CLIP image-and-text model. For an eligible image, Silo preprocesses the picture and stores a numeric image embedding. When you type a description, the text side of the model turns the words into an embedding. Silo compares the text and image vectors and ranks likely matches. The confidence control changes how selective the results are.

The source identifies the model family as `Xenova/clip-vit-base-patch32`; the app uses quantized ONNX model files and a local inference runtime. Inference is configured to run locally and remote model downloads are disabled by the worker. Packaged builds are configured to include a CLIP model cache. This is image/visual similarity search, not a general-purpose web search or guaranteed OCR of every word inside a document.

After model and index files are available locally, query inference can run without sending local image content to a cloud AI service. Google Drive and Google Photos still require network access to sign in and fetch remote items.

## What the progress labels mean

Indexing is a set of independent jobs:

- **Startup / opening saved indexes:** reading local Silo records. A percentage here is not a percentage of every media analysis task.
- **Discovery:** walking connected source trees and finding files.
- **Search:** creating or updating CLIP records for eligible images and documents.
- **Faces:** optional face detection and grouping; see [People](03-people.md).
- **Locations:** reading embedded photo GPS data; see [Map](05-map.md).
- **Duplicates:** hashing/comparing exact file contents.
- **Audio:** inventorying audio files.
- **Quality:** scoring photos for memory selection.
- **Thumbnails/previews:** preparing visual previews for the browser.

A source can be visible while one or more of these jobs is still running. Search only sees records that have been added to the searchable index. Results may arrive progressively as indexing fills in, but no result count or fixed latency is guaranteed for every library or build. Cold-start preparation and index recovery can take time.

## Step-by-step search

1. Open **Files** and make sure the relevant sources are available and selected.
2. Wait for the app's search readiness indicator to say the local search index is prepared. If it is still opening records or warming the model, results may be delayed or incomplete.
3. Describe the visual idea in plain language, such as “red sailboat at sunset.”
4. Adjust the confidence threshold. A more selective threshold returns fewer, closer matches; a looser threshold can return more approximate matches.
5. Refine by type, year, people or location, and open a card to inspect the original.
6. If a newly added file is missing, allow its discovery and search-index stage to reach that file; confirm the source can be read.

## What gets indexed

Silo keeps the original path/source association and a local searchable representation. Thumbnails, preview files, face data, map data, duplicate records and search vectors are separate derived data. The exact set of supported formats depends on which local decoders can read a file and whether that build has the required components. Corrupt, encrypted, unusually large or unsupported files may be skipped or reported as errors.

## Performance and control

Building a large library index is compute- and disk-intensive. Face scanning is a separate optional task; start it after basic file/search work is stable and pause it from **People** if it competes with active work. Avoid adding many huge or slow remote sources at once. Use an external Silo cache destination when local cache space is constrained, and keep the drive connected while work is pending.

If Silo makes the Mac too warm or sluggish, quit it; saved index progress remains local and unfinished stages can continue later. The app's exact CPU scheduling and search prioritization can vary by build. This guide does not promise a CPU ceiling or instant results while indexing is active.

## Search troubleshooting

- **No results:** confirm the index is ready, the source is selected and accessible, and the query describes visual content rather than assuming every embedded text string is OCR-searchable.
- **No new files:** wait for discovery and search indexing; a visible source count is not the searchable count.
- **Slow first query:** look for the model warm-up or search-index preparation status, then retry once ready.
- **Wrong result balance:** move the confidence slider and combine results with metadata filters.
- **Search unavailable:** see [cache and recovery checks](12-troubleshooting.md#search-index-does-not-become-ready).
