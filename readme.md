# Modern Responsive Landing Page

A clean, modern, and fully responsive landing page built with semantic HTML5 and CSS3 (Flexbox & CSS Grid). Designed from scratch without external frameworks like Bootstrap or Tailwind CSS.

---

## 🚀 Live Demo & Screenshots

- **Live Preview:** Open `index.html` in any web browser.
- **Design Layout:** Clean dual-column Hero section, auto-adjusting Services grid, accessible Contact form, and responsive header navigation.

---

## 🛠️ Features & Improvements

 **Semantic HTML5:** Built using `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` elements for optimal SEO and accessibility.
 **Fluid CSS Grid:** Service cards adjust dynamically using `repeat(auto-fit, minmax(220px, 1fr))` without breaking layouts across screens.
 **Mobile Responsive:** Dedicated breakpoints (`@media`) ensure navigation links stack vertically, forms fit screen boundaries, and content scales seamlessly on smartphones and tablets.
 **Form-Ready:** Contact form is configured with standard `action`, `method="post"`, and explicit `name` attributes (`name`, `email`, `message`) ready for backend or form-service integration (e.g., Formspree, Web3Forms).
 **Performance & Assets:** Fixed asset directory paths (`assets/brand-image.jfif`), added `width`/`height` attributes to prevent layout shifts (CLS), and included favicon support (`assets/favicon.ico`).

---

## 📁 File & Folder Structure

```text
Project/
├── assets/
│   ├── brand-image.jfif    # Hero section image
│   └── favicon.ico        # Browser tab favicon
├── index.html             # Main HTML structure
├── style.css              # Custom CSS styles, variables & media queries
└── README.md              # Project documentation