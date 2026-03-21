# GreyTube

<img src="icon128.png" width="80" align="right" alt="GreyTube icon"/>

> YouTube's dark mode, softened.

GreyTube replaces YouTube's harsh pitch-black background with a calm, easy-on-the-eyes grey theme. Pure CSS background overrides — nothing else is touched. The player, buttons, thumbnails, and description all look exactly as YouTube intends.

---

## Install

Since this extension isn't on the Chrome Web Store, you load it manually:

### 1. Download

Click **Code → Download ZIP** on this page, then unzip it.

### 2. Load in Chrome / Brave

1. Go to `chrome://extensions` or `brave://extensions`
2. Enable **Developer mode** (toggle in the top-right)
3. Click **Load unpacked**
4. Select the unzipped `greytube-v2` folder

> **Note:** YouTube must be in dark mode. Go to YouTube → profile picture → **Appearance → Dark theme**.

---

## Important note

👉 Sideloaded extensions require the files to be remain at the same path, So don't delete the folder after loading the extension or extension will get removed.

---

## What it changes

- Page background: `#0f0f0f` → `#1c1c1c`
- Nav, sidebar, menus: matching grey palette
- Fullscreen: no UI bars bleeding over the video
- Everything else — player, thumbnails, buttons, description — **untouched**

---

## Updating

Fix a selector in `theme.css`, bump the version in `manifest.json`, reload the extension on `chrome://extensions`.

---

## License

MIT — do whatever you want with it.
