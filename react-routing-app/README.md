# Multi-Page React App with Routing and Lazy Loading

## Objective
Create a React application with multiple pages (Home, About, Contact) using React Router for navigation and optimize it using `React.lazy()` and `Suspense` for lazy loading.

## Technologies Used
- React.js
- React Router DOM v6
- React.lazy()
- Suspense

## Concepts Covered

### React Router DOM
- `BrowserRouter` to enable routing in the app
- `Routes` and `Route` to define page paths
- `NavLink` for navigation with active link styling

### Lazy Loading
- `React.lazy()` loads each page only when it is visited
- Reduces the initial bundle size (code splitting)
- `<Suspense fallback={...}>` shows a loading spinner while the page loads

## File Structure
```
src/
├── pages/
│   ├── Home.js        ← Home page (lazy loaded)
│   ├── About.js       ← About page (lazy loaded)
│   └── Contact.js     ← Contact form page (lazy loaded)
└── App.js             ← Router + React.lazy + Suspense setup
```

## Key Code
```jsx
const Home    = lazy(() => import('./pages/Home'));
const About   = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/"        element={<Home />} />
    <Route path="/about"   element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Suspense>
```

## How to Run
```bash
npm install
npm start
```

## Features
- Multi-page navigation (Home, About, Contact)
- Active link highlighting in navbar
- Lazy loading for all pages
- Loading spinner shown during page load
- Working contact form with submission feedback
