import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="page">
      <h1>Welcome to Dashboard</h1>

      <div className="card">
        <h3>Theme Settings</h3>
        <p>Current Theme: <strong>{state.theme}</strong></p>

        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Home;