# Auto Detail Car Wash
> A comprehensive car wash website for booking and detailing services

**Built by JARVIS v3** on 2026-04-03 13:25

## Stack
- HTML5 + Tailwind CSS + Vanilla JavaScript
- Font Awesome 6 Icons
- Firebase (Firestore, Auth, Storage, Hosting)
- GSAP + ScrollTrigger, AOS, Swiper, Alpine.js, Typed.js
- Light theme by default with dark mode toggle

## Pages
- **Home** → `index.html`
- **About Us** → `about.html`
- **Blog** → `blog.html`
- **Showcase** → `showcase.html`
- **Contact Us** → `contact.html`
- **Book Now** → `booking.html`

## Palette
- Primary: `#C9A84C`
- Accent: `#E8C97A`
- Mode: dark

## Firebase Setup
See `FIREBASE_GUIDE.md` for a full explanation of collections, documents, and rules.

1. Firebase Console → Create project → Add Web App → copy config
2. Replace values in `js/firebase-config.js`
3. Enable Auth + Firestore + Storage
4. Apply `firestore.rules` + `storage.rules`

## Deploy
```bash
npm install -g firebase-tools
firebase login && firebase init && firebase deploy
```
