# License, demo and support access

Settings shows whether this computer has lifetime access. In an unlicensed installation, choose **View lifetime purchase options** to open the unlock panel. Paid activation requires a working internet connection to the license relay and a finalized Solana payment.

## Lifetime access: one payment, one computer

Lifetime access is a one-time license bound to **one computer**, not a recurring subscription or a shared multi-computer license. Each additional computer needs its own license. The purchase panel in the installed app shows the current price, payment details, and the features included with full access; check those terms before approving payment.

Configuration export/import transfers settings and selected indexes, but excludes paid and beta licenses and the installation ID. Importing a config on another computer does not unlock it.

## Pay and activate

1. Open the purchase panel and wait until it says the request is ready for this computer.
2. Scan the QR code with your phone's camera or a compatible Solana wallet, or use the wallet/payment-link control.
3. Before approving, compare the requested amount, network, and recipient shown by the app with the payment request in your wallet. Stop if they do not match.
4. Approve the transfer in your wallet. Silo does not receive your seed phrase, private key, or transaction-signing authority.
5. Keep the panel open while Silo checks the relay; wallet approval alone is not final confirmation.
6. After verification, Silo saves the signed license for this computer, enables full access, and closes the unlock panel automatically. Confirm the active license in Settings.

The QR/payment link includes a random reference registered for this installation. Copying just the receiver address does not preserve that reference, so prefer the complete request for automatic detection.

## Manual verification and payment problems

The fallback accepts a transaction signature or an explorer link containing one. It sends the signature to the same relay for on-chain checks; pasting a signature does not itself grant access. Manual verification does not require the QR reference, but a new manual checkout rejects a transaction that predates that checkout (apart from a five-second tolerance). Recovery of an existing legacy receipt uses a separate verification flow.

If a confirmed payment does not activate, **do not pay again**. Save the signature and the installation ID and contact Silo support privately. A pending response may mean finalization or RPC lookup is still in progress; a relay/network error is not proof that the wallet payment failed. An expired request needs attention before paying or retrying. A payment already bound to another installation cannot be reused.

The relay verifies finalized transaction data, the signature, the receiving wallet, the USDC asset and amount, and any checkout reference or time requirement. It then issues a signed, computer-bound license token; the app verifies that token before saving it. Successful purchases are recorded centrally, not just in the local app receipt. The installed purchase panel is the source for current payment terms.

This guide's source and automated-test review is not a new production purchase test. Check the terms shown in your installed release before paying, and never share a wallet seed phrase or private key.

## Demo or beta access

Demo access has limits on library size, some actions, and on-demand Memory generation. The installed app displays the current limits when you choose a restricted feature or open the purchase options in Settings; check those values in the build you are using.

Beta-access requests and signed activation links require the matching service to be configured. Beta/owner grants are not paid purchases. Demo testing mode can apply demo limits without deleting a saved lifetime license; check the displayed status.

## Support reports

Before sending a bug report, review any screenshot and text for faces, paths, filenames, account names and other personal details. Share a payment signature or installation ID only through private license support when needed, not in a public issue or screenshot. Never attach private keys or config exports that may contain access tokens.
