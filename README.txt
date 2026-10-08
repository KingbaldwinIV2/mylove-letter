# My Love Letter — QR Website

This folder is a small mobile-friendly romantic letter website made with HTML, CSS and JavaScript.

## Files
- `index.html` — the 4-page letter
- `qr.html` — QR code page
- `style.css` — design and responsive layout
- `script.js` — page navigation, swipe support and floating hearts
- `assets/` — your photos + QR placeholder

## How to make the QR scan from a phone
A QR code needs a public web address. A `file:///...` link on your computer will not normally work on your girlfriend's phone.

1. Upload this folder to a static host such as GitHub Pages, Netlify or Vercel.
2. Open the public URL.
3. Open `qr.html`.
4. Paste the public URL of `index.html` into the box and click **Make QR**.
5. Screenshot/save that QR and print or send it.

The provided `assets/qr-placeholder.png` is only a placeholder and encodes:
https://YOUR-LINK-HERE.example/love-letter/

## Customize the title/photos
The four visible page photos are cropped from the two uploaded collages:
- Page 1: first collage, top-left
- Page 2: first collage, top-right
- Page 3: second collage, top-left
- Page 4: second collage, bottom-right

Change the `.panel-*` background settings in `style.css` if you prefer different quadrants.

## Quick local test
Double-click `index.html` to preview the letter on your computer.
For the QR workflow, serve the folder through a local web server or deploy it publicly.
