# Memories and story videos

**Memories** turns indexed local photos and clips into editable stories and locally saved movies. Silo automatically tops up suggestions after startup indexing settles, then every 24 hours while it remains open. Movies are prepared in the background, one at a time, with progress on each card, and saved in the configured Memories folder.

## Find or suggest a story

- Open Memories to load saved editable cards and the **Memory Book** of finished movies from the configured Memories folder.
- Choose **Generate Memories** to request a fresh set of five editable stories from the indexed archive. Finished movies remain in the Memory Book; unfinished stories can be kept in reserve.
- Automatic runs preserve your existing editable cards and aim to top up a set of five. They do not retire the set you are editing.
- Suggestions depend on what has been indexed and on available dates, people, locations and quality metadata. No suggestion is a guarantee that every relevant file was found.

While generating, the page shows spinner placeholder cards, the current phase, progress and an estimated remaining time when available. A manual request queues behind an automatic run already in progress. If sources are offline or new story material is exhausted, Silo may use reserve stories or keep the current set rather than produce five new stories.

The demo includes five automatic memories; generating more on demand requires full access. **Show on launch** controls which page opens, not whether the automatic generator runs.

## Review and find saved movies

1. Wait for a card's background movie preparation to finish, then choose **Watch memory**.
2. Use the full-screen button or double-click the movie to enter full-screen playback.
3. Expand **Edit movie settings** to inspect the photos/clips count, soundtrack and original clip-audio controls. Movie length is fixed at **one minute (60 seconds)** in this release; mood is a story label, not a separate duration/pacing editor.
4. Choose a library soundtrack or **Browse your audio library** to select a song. Changing the library soundtrack re-prepares the watchable movie in the background.
5. Use the card's folder button to reveal the already saved movie in Finder, or open a finished movie in the **Memory Book**.
6. To change the storage destination, use **Settings → Memories**. Movies in a chosen destination are written under **Silo Memories**; the default is Silo's local app storage. Copy a finished movie from there when you need a separate copy.

The soundtrack is selected locally from available music. If no usable music is available, a built-in fallback can be used. Review the soundtrack and original audio mix before saving.

Removing an individual suggestion changes Silo's editable list; it does not delete source photos or an already finished movie. The bulk-clear control is no longer present. The Memory Book lists one finished movie per story from the Memories folder, including movies whose editable cards are no longer visible. Settings lets you choose where movies and story-support files are saved, or return to Silo's app storage.

## Limits

Memory discovery depends on completed indexes and the content present in the source library. Automatic and requested generation, along with background movie preparation, can use substantial CPU and disk space. If a card is waiting, another movie may be rendering first; if its files are offline, reconnect the source. Check the destination has enough free storage. Silo does not upload local media to an online AI service for this workflow.
