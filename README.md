# Dynamic-Website-Builder
This project is a Dynamic Website Builder that generates YouTube-style video cards using **HTML**, **CSS**, and **JavaScript**. It demonstrates how to clone a template component and populate it with custom data to render video previews dynamically.

---

## 📌 Features

- Clone and display custom video cards dynamically via JavaScript
- Responsive design for both desktop and mobile views
- Automatically formats views (e.g., 953000 → 953K)
- Displays video duration, title, channel name, views, and age
- Clean UI mimicking YouTube's card layout

---

## 💻 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

---

## 🛠️ How It Works

1. A single `.container` in the HTML is used as a **hidden template**.
2. JavaScript clones this template and injects dynamic data (like title, views, duration, etc.).
3. Thumbnails are added as background images using inline styles.
4. Each card is then appended to a `.cards` wrapper on the page.

---

## 📱 Responsive Design

The layout adjusts based on screen size using a media query:
- On smaller screens (`max-width: 550px`), the layout switches from horizontal to vertical for better readability.

---
