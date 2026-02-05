import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "#222",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>

      <Link to="/projects" style={{ color: "white", textDecoration: "none" }}>
        Projects
      </Link>
    </nav>
  );
}

export default Navbar;