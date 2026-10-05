# Ateeb Hussain — Standout Portfolio Website

> **MERN Stack Developer & Video Editor** · Karachi, Pakistan  
> Inspired by designer-portfolio carousels on Behance with split identity, draggable floating stickers, and a Premiere Pro timeline experience section.

---

## ⚡ Tech Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** + Custom CSS Properties Design System
- **Framer Motion** for 60fps animations, physics-based dragging, and entrance effects
- **React Icons** (`react-icons/si`, `react-icons/fa`, `react-icons/fi`, `react-icons/vsc`)
- **Google Fonts** (Inter, Playfair Display Italic, JetBrains Mono)

---

## 🚀 Quick Start (Run Locally)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/`.

3. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled production output will be in the `dist/` directory.

---

## ☁️ How to Deploy on Vercel

### Method 1: Deploy via Vercel CLI (Fastest)

1. Open your terminal in this directory:
   ```bash
   npx vercel
   ```
2. Follow the on-screen prompts:
   - **Set up and deploy?** `Y`
   - **Which scope?** (Select your personal account)
   - **Link to existing project?** `N`
   - **Project name?** `ateeb-hussain-portfolio` (or press Enter)
   - **In which directory?** `./` (press Enter)
   - Vercel automatically detects Vite and uses `dist` as the output directory.
3. For production deployment:
   ```bash
   npx vercel --prod
   ```

### Method 2: Deploy via GitHub (Recommended for automatic updates)

1. Create a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of standout portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** -> **"Project"**.
4. Import your GitHub repository.
5. In the build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Vercel will build and give you a live production URL!

---

## 📝 How to Edit All Portfolio Content (`data.js`)

All website content is centralized in a single file:
👉 **[`src/data/data.js`](./src/data/data.js)**

### 1. Update Personal Info & Socials
Open `src/data/data.js` and edit `personalInfo` and `socialLinks`:
```javascript
export const personalInfo = {
  name: "Ateeb Hussain",
  title: "MERN Stack Developer / Video Editor",
  location: "Karachi, Sindh, Pakistan",
  email: "ateebhussain78@gmail.com",
  phone: "+92-3182725087",
  whatsapp: "923182725087", // No '+' or dashes for wa.me link
  tagline: "...",
  profile: "...",
};
```

### 2. Replace Placeholder Projects
In `src/data/data.js`, look for `projects.web` and `projects.video`:
- **Web Projects**: Add your live website URL, GitHub repository URL, and screenshot image path (put images in `src/assets/`).
- **Video Projects**: Put your video thumbnail path and embed URL (e.g. YouTube embed `https://www.youtube.com/embed/VIDEO_ID` or Vimeo embed) into `videoUrl`.

### 3. Add Your Photo to the Polaroid
In `src/sections/About.jsx`, replace the placeholder in `<div className="polaroid-img">` with your photo:
```jsx
<img src="/your-photo.jpg" alt="Ateeb Hussain" className="w-full h-full object-cover" />
```

---

## ✨ Standout ("Hatke") Features Included

- **⚡/🎬 Split Identity**: Hovering on or clicking the name in the Hero (`<Ateeb Hussain />` ↔ `🎬 Ateeb Hussain`) switches the site theme between **Developer Mode** (code syntax accents, monospace typography, `//` section headers) and **Video Editor Mode** (filmstrip borders, sequence markers).
- **🎛️ Premiere Pro Timeline Experience**: Styled like an authentic NLE workspace with V2, V1, A1 tracks, timecode readout, 24.00 fps counter, scrubbing playhead that moves as you scroll, and interactive clip blocks with a Clip Inspector panel.
- **🏷️ Draggable Sticker Tool Badges**: Physics-based floating stickers (Adobe Premiere Pro `#00005B`, After Effects `#00005B`, Media Encoder `#00005B`, VS Code `#007ACC`, React, Node.js, MongoDB, JavaScript, Express, HTML5, CSS3, Git, GitHub, Vercel) that float up and down, tilt, react to mouse movement with parallax, and can be dragged around the screen.
- **📼 Cinematic Loading Intro**: Timecode counter running from `00:00:00:00` with pulsing red `REC [●] 4K 60FPS`, percentage counter counting to 100%, and quick skip.
- **〰️ Hand-Drawn Scroll-Drawn Squiggly Line**: An SVG ribbon running through the portfolio that dynamically draws itself based on scroll depth.
- **🎯 Interactive Custom Cursor**: Magnetic dual-layer cursor with smooth lerp physics that expands and highlights over buttons, stickers, chips, and links.
- **🎞️ Video Showreel & Lightbox Modal**: Video cards with hover preview, play button pulse, and full-screen lightbox playback.
