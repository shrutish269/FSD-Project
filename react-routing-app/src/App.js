import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// ✅ Lazy Loading - pages are loaded only when navigated to
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Fallback component shown while lazy page loads
const Loading = () => (
  <div style={styles.loading}>
    <div style={styles.spinner}></div>
    <p>Loading page...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div style={styles.app}>
        <nav style={styles.nav}>
          <span style={styles.brand}>⚛️ ReactApp</span>
          <div style={styles.links}>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                style={({ isActive }) => ({
                  ...styles.link,
                  ...(isActive ? styles.activeLink : {}),
                })}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* ✅ Suspense wraps lazy-loaded routes with a fallback */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

const styles = {
  app: { minHeight: "100vh", background: "#f8f9fa", fontFamily: "Segoe UI, sans-serif" },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#2d3436",
    padding: "0 24px",
    height: "60px",
  },
  brand: { color: "#fff", fontSize: "20px", fontWeight: "bold" },
  links: { display: "flex", gap: "8px" },
  link: {
    color: "rgba(255,255,255,0.7)",
    textDecoration: "none",
    padding: "6px 16px",
    borderRadius: "6px",
    fontSize: "15px",
  },
  activeLink: {
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    fontWeight: "bold",
  },
  loading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
    color: "#636e72",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #dfe6e9",
    borderTop: "4px solid #0984e3",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default App;