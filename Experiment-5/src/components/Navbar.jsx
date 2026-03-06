import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#eee" }}>

      <Link to="/">Home</Link> |{" "}
      <Link to="/tasks">Tasks</Link> |{" "}
      <Link to="/analytics">Analytics</Link> |{" "}
      <Link to="/reports">Reports</Link>

      <div style={{ float: "right" }}>
        <ThemeToggle />
      </div>

    </nav>
  );
}

export default Navbar;