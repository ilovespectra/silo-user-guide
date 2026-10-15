# Phones and messages

The **Mobile** section manages connected iPhone/iPad and Android sources, saved-device copies and message exports. Phone support is a USB workflow, not a full device backup of every protected operating-system file.

## Device controls in 2.1.4

Use **Scan devices** to refresh discovery. Each device has a compact action toolbar for backing up, browsing, connecting, renaming its Silo label, opening supported encrypted restore-archive controls, and unmounting. Available actions depend on the connection and installed tools.

**Connect** and **Renew backup** open a **Back up [device]** dialog before starting the dated local snapshot. Check the device, read the scope, and choose or change the **Save to** destination before confirming. Snapshot creation does not change files on the phone; restoring an iOS archive is a separate device-write action and can replace current contents.

## Connect an iPhone or iPad

1. Packaged builds include iOS connection tools. If Silo reports missing tools, follow its reinstall/setup guidance. On Windows, install **Apple Devices** (or iTunes) so Apple's device service is available; bundled command-line tools do not replace that service.
2. Connect the device by USB, unlock it and choose **Trust This Computer** on the phone.
3. In Silo, choose **Connect** and complete pairing.
4. Review and confirm the snapshot dialog when connecting. Connecting starts or updates a dated local copy of accessible files. Browse the live device or saved snapshot as available; Silo does not mount the entire protected device filesystem.

**iOS limit:** non-jailbroken iOS exposes a media area over this connection (such as DCIM/Photos and other shared media folders); it does not expose the entire protected device filesystem. This is an Apple platform restriction.

## Connect Android

1. Packaged builds include Android `adb`. Silo prefers a usable system `adb` when present so it can share the existing server; follow the app's setup guidance if no tool is available.
2. Enable Developer options and USB debugging on the phone.
3. Connect by USB and allow the debugging prompt. Select file-transfer mode if your device requires it.
4. Choose **Connect** in Silo and browse the accessible shared storage, typically `/sdcard`.

If the device is marked unauthorized, unlock it and approve the computer prompt. A charge-only cable, hub or disabled USB debugging can prevent detection.

## Browseable snapshots and restore archives

Mobile can create dated, browseable copies of device data and manage iOS restore archives where the connected-device workflow supports them. Before starting a backup or restore, check the phone identity, backup age, selected scope and destination. A saved browseable copy is distinct from a live phone connection; an unplugged phone can still have a local saved snapshot.

A backup's existence does not prove it is current or restorable. Use the app's verification/status controls, keep independent copies and avoid overwriting a newer backup until you understand which device and date it represents.

## Messages

Messages export is user initiated:

1. Select a connected phone or an already-saved message history.
2. Load the history.
3. Review contact/conversation names and the selected destination and output format.
4. Export only the conversations you intend to save.

Updating a phone's message backup requires a connected, trusted phone. Message exports may contain private conversations and contact details; store and share them carefully.

## Limits and troubleshooting

Silo does not bypass phone platform permissions. Android access depends on USB debugging authorization; iOS access is limited to Apple's exposed media area. If a device is missing, see [phone troubleshooting](12-troubleshooting.md#phone-is-not-detected).
