import React, { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

const Analytics = () => {
  const { state } = useContext(AppContext);

  const totalProjects = useMemo(() => {
    console.log("Calculating total projects...");
    return state.items.length;
  }, [state.items]);

  return (
    <div className="page">
      <h1>Analytics</h1>

      <div className="card">
        <h3>Project Summary</h3>
        <p>Total Projects: <strong>{totalProjects}</strong></p>

        {totalProjects > 0 ? (
          <p>You are actively managing projects 🚀</p>
        ) : (
          <p>No projects yet. Start adding some!</p>
        )}
      </div>
    </div>
  );
};

export default Analytics;