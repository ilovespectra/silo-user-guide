# License, demo and support access

The in-app Settings/license area can show whether this Mac has lifetime access and may offer a beta-access request, payment options or manual transaction-signature verification. What is visible and what actually works depend on the exact client build and the deployed license relay.

## What the source currently advertises

Silo's built-in Help describes a **$25 USDC one-time payment on Solana** for lifetime access, rather than a recurring subscription. The listed benefits include unlimited sources/files, Digital Folders, Memories previews and mapped locations. Confirm the current offer and terms in the actual release before paying; this page records source copy, not a verified live checkout.

## Important activation limitation

The same built-in Help explicitly warns that the current source checkout does **not** implement the secured shared two-device registry described for a future client/relay flow. Its manual signature path is not reference-bound, and the Settings UI lacks the device manager. The licensing relay and payment-to-unlock flow were not verified end-to-end while this guide was prepared.

For that reason, do not rely on a promise of two-device activation or assume that submitting a transaction signature will unlock a particular build. Check the current release notes and license status, keep your transaction signature private, and contact Silo support if the app remains locked after a confirmed payment. Never share a wallet seed phrase or private key.

## Demo or beta access

A preview may expose beta-access request or activation controls. Those controls require the matching release service and configuration to be live. A test/demo mode may limit browsing or licensing state without deleting indexed records, but exact behavior can differ between builds. Read the status displayed by the installed app and the release notes for that build.

## Support reports

Settings may include a bug-report flow. Before sending, review any screenshot and text for faces, paths, filenames, account names and other personal details. Do not attach license signatures, private keys, or config exports that may contain access tokens.
