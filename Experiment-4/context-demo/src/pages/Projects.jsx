import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Projects = () => {
  const { state, dispatch } = useContext(AppContext);

  const addProject = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: `Project ${state.items.length + 1}`
    });
  };

  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="card">
        <button onClick={addProject}>Add Project</button>

        {state.items.length === 0 ? (
          <p>No projects added yet.</p>
        ) : (
          <ul className="project-list">
            {state.items.map((item, index) => (
              <li key={index}>
                {item}
                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: index })
                  }
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {state.items.length > 0 && (
          <button
            className="clear-btn"
            onClick={() => dispatch({ type: "CLEAR_ITEMS" })}
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;