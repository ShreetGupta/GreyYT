# GreyTube

<img src="icon128.png" width="80" align="right" alt="GreyTube icon"/>

> YouTube's dark mode, softened.

GreyTube replaces YouTube's harsh pitch-black background with a calm, easy-on-the-eyes grey theme. Lightweight CSS theme with a tiny JS script for clean fullscreen — under 20 KB total.

---

## Install

Since this extension isn't on the Chrome Web Store, you load it manually in two steps:

### 1. Download

Click **Code → Download ZIP** on this page, then unzip it.

### 2. Load in Chrome / Brave

1. Open Chrome/Brave and go to `chrome://extensions` or `brave://extensions`
2. Enable **Developer mode** (toggle in the top-right)
3. Click **Load unpacked**
4. Select the unzipped `yt-grey-theme` folder

That's it. Open YouTube in dark mode and enjoy the softer look.

> **Note:** YouTube must be in dark mode. Go to YouTube → your profile picture → **Appearance → Dark theme**.

---

## What it changes

- Main background: `#0f0f0f` → `#1a1a1a`
- Cards, menus, dropdowns: slightly lighter greys (`#1e1e1e`, `#242424`)
- Masthead / top nav: `#1f1f1f`
- Description box, comments, search results — all cohesive
- Clean fullscreen — no UI bars bleeding over the video
- Custom styled scrollbars
- No flash of black — CSS injects at `document_start`

---

## Updating

When YouTube breaks something, fix the selector in `theme.css` or `fullscreen.js`, bump the version in `manifest.json`, and reload the extension on `chrome://extensions`.

---

## License

MIT — do whatever you want with it.
