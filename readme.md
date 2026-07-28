# HTML & CSS Mini Project (Updated with JavaScript)

A responsive landing page enhanced with interactive Vanilla JavaScript features. This project demonstrates DOM manipulation, event handling, form validation, and dynamic element creation without using external libraries or frameworks.

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

--------------JAVASCRIPT-----------------

The project includes seven core JavaScript enhancements:

1. **Interactive Navigation Menu**
   * Highlights the currently selected menu item (`Home`, `About`, `Services`, `Contact`) when clicked.
   * Dynamically manages the `.active` CSS class to ensure only one item is active at a time.

2. **Hero Section Interaction**
   * Triggers a welcome message alert when the "Get Started" button is clicked.

3. **Contact Form Validation**
   * Validates required input fields (`Name`, `Email`, `Message`) prior to submission.
   * Prevents standard page refreshes using `event.preventDefault()`.
   * Displays clear inline feedback messages for successful submissions or missing fields.

4. **Dynamic Character Counter**
   * Monitors the text length inside the message area in real time (`input` event).
   * Displays character count progress (e.g., `0 / 200 Characters`) and provides visual feedback when approaching or exceeding limits.

5. **Theme Switcher (Light / Dark Mode)**
   * Toggles the `.dark-theme` class on the `<body>` element upon clicking the theme button.
   * Allows users to switch seamlessly between original light styles and dark mode.

6. **Smooth Scroll-to-Top Button**
   * Monitors window scroll position (`window.scrollY > 300`).
   * Displays a floating back-to-top button only when scrolled down, which smoothly scrolls the page back to the top when clicked.

7. **Dynamic Footer Year**
   * Automatically fetches and sets the current calendar year in the footer using JavaScript's `Date` API.

---

## 📁 File & Folder Structure

INTERNSHIP PROJECT 1
├── assets/
│   ├── brand-image.jfif    # Hero section image
│   └── favicon.ico        # Browser tab favicon
├── index.html             # Main HTML structure
├── index.css              # Custom CSS styles, variables & media queries  
├── index.js              # Custom CSS styles, variables & media queries
└── README.md              # Project documentation