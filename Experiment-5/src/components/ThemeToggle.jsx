import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ThemeToggle() {

  const { toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;