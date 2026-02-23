import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/projects">Projects</Link>
      <Link style={styles.link} to="/analytics">Analytics</Link>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "15px",
    backgroundColor: "#222",
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Navbar;