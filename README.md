# 7-Day Front-End Development Training

A collection of small front-end projects built over a 7-day training program, covering the fundamentals of HTML, CSS, JavaScript, and React.

## Tech Stack
- HTML5
- CSS3 (Flexbox, media queries for responsive design)
- Vanilla JavaScript (DOM manipulation, form validation, event handling)
- React (Day 6, via CDN + Babel)

## Project Structure
```
├── day1/   Portfolio Landing Page
├── day2/   Responsive Business Website
├── day3/   Login & Registration UI
├── day4/   To-Do List Application
├── day5/   E-Commerce Product Page
├── day6/   React.js Mini Project (Notes App)
└── day7/   Final Project (Recipe Website)
```

## Day-by-Day Breakdown

**Day 1 — Portfolio Landing Page**
Personal portfolio with a navigation bar, hero section, about section, and contact section. Fully responsive layout.

**Day 2 — Responsive Business Website**
Multi-section business site (Home, Services, About, Contact) with a mobile hamburger menu and JavaScript form validation.

**Day 3 — Login & Registration UI**
Tabbed login/register interface with client-side JavaScript validation, including email format checks, password length checks, and password-confirmation matching.

**Day 4 — To-Do List Application**
Task manager with add, delete, and mark-as-complete functionality, built with plain JavaScript DOM manipulation.

**Day 5 — E-Commerce Product Page**
Responsive single-product page with an image gallery, quantity selector, and a working add-to-cart counter.

**Day 6 — React.js Mini Project**
A Notes app built with React (via CDN), demonstrating reusable components (`Header`, `NoteForm`, `Note`, `NoteList`) and state management with `useState`.

**Day 7 — Final Project**
A small recipe website combining everything from the previous days: responsive layout, mobile navigation, a live search filter over a recipe list, and a validated contact form.

## Running the Projects
Each folder is self-contained. To view a project:
1. Open the folder's `index.html` file directly in a browser, **or**
2. Serve it locally for the best results:
   ```
   cd day1
   npx serve .
   ```
   (Day 6 needs internet access on first load since React/Babel are loaded from a CDN.)

## Notes
- Contact forms are front-end only (validation + UI feedback); they are not wired up to an actual email service.
- All styling is custom CSS — no CSS frameworks were used.
