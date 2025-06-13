# Caden Ice Personal Website

This is a personal website for Caden Ice, inspired by the sleek, modern design of giustotech.web.app. Built with HTML, JavaScript, Three.js, GSAP, and Tailwind CSS, it is optimized for GitHub Pages hosting.

## Setup Instructions

1. **Create a GitHub Repository**:
   - Create a repository named `caden-ice.github.io` (replace `caden-ice` with your GitHub username).
   - Clone it:
     ```bash
     git clone https://github.com/caden-ice/caden-ice.github.io.git
     ```

2. **Copy Files**:
   - Place the following files in the repository:
     - `index.html`
     - `about.html`
     - `work.html`
     - `gallery.html`
     - `thoughts.html`
     - `books.html`
     - Create a `js` folder and add `main.js`.
     - Add `README.md` to the root.
   - Replace placeholders (e.g., `[Your blog post content]`, `https://via.placeholder.com/150`) with your content and images.

3. **Push to GitHub**:
   - Commit and push:
     ```bash
     git add .
     git commit -m "Initial commit"
     git push origin main
     ```

4. **Enable GitHub Pages**:
   - In repository settings, go to "Pages".
   - Set source to `main` branch, root directory.
   - Save. Site will be live at `https://caden-ice.github.io` (replace `caden-ice` with your username).

## Customization

- **Images**: Replace placeholder URLs (e.g., `https://via.placeholder.com/400`) with your images (e.g., `images/photo.jpg`). Store images in an `images` folder.
- **Content**: Edit HTML files to add your descriptions, work experience, blog posts, book details, etc.
- **Styling**: Adjust Tailwind classes or CSS in `<style>` tags for design tweaks.

## Features

- **Dark Theme**: Deep blacks, purples, and reds for a classy, vibey aesthetic inspired by giustotech.web.app.
- **Dynamic Animations**:
  - "Caden Ice" intro slides across and fades out.
  - Three.js particle system follows mouse with smooth, glowing effects.
  - GSAP-powered scroll animations for text and images.
- **Responsive Design**: Seamless on desktop and mobile.
- **Pages**:
  - **Home**: Hero section with photo, intro, and animated button.
  - **About**: Animated timeline for your biography.
  - **Work**: Card-based projects with scroll-triggered animations.
  - **Gallery**: Hover-reveal descriptions with scaling images.
  - **Thoughts**: Blog posts in sleek cards.
  - **Books**: Four-column grid (two on mobile) with animated book cards.

## Dependencies

- Tailwind CSS (CDN)
- Three.js (CDN)
- GSAP (CDN)
- Roboto Mono font (Google Fonts)

## Notes

- Ensure image paths are relative to the repository root.
- Test locally with `python -m http.server`.
- For advanced customization, consider adding a build process.