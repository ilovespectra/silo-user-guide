# Google Drive and Google Photos

Cloud sources appear alongside local folders, but their originals remain remote. Browsing a cloud item may require a network connection and a valid Google session.

## Google Drive

Where the build has Google OAuth configured, connect the account from **Google Accounts**. Silo can browse folders, preview/stream items, and—in Drive—create folders, rename, move items to Trash and upload files. Google Docs, Sheets and Slides are converted to a preview format where supported.

Multiple accounts can stay connected. **All Drives** combines their contents; account-specific entries help keep work and personal sources distinct. If one account expires or is revoked, reconnect that account; other accounts can remain available.

## Google Photos

Silo uses Google's Photos Picker. It does **not** browse the entire Google Photos library. You explicitly choose items in the Google Photos picker, then Silo loads the selected set as a browsable source. Picker selections can be used with supported search, People, Digital Folders and export workflows while the session/source remains available. Photos Picker items are read-only in Silo.

## Connection setup and scopes

Some builds may include working OAuth credentials; others may require the application owner to configure a Google Cloud project, enable Drive API and Photos Picker API, set the OAuth desktop client and allowed scopes, and add test users while the OAuth app is in testing. If Silo reports that `GOOGLE_CLIENT_ID` or credentials are missing, that is a build/configuration requirement—not a password to paste into a random web page. Ask the Silo maintainer for the supported setup path before editing app files.

OAuth uses a browser sign-in flow with PKCE. Refresh tokens are stored in Silo's user data. Disconnecting/signing out revokes the Google token; removing a source from the visible scope is different from disconnecting the account.

## Limits

- Google Drive requires online access for remote content and remote write actions.
- Photos Picker contains only the items the user selects and is read-only.
- A cached preview or semantic record is not a local backup of the full remote original.
- Google may require OAuth verification for a publicly distributed application using restricted Drive access. Test-mode accounts can have time-limited access.
