import { useSelector } from "react-redux";
import { useMemo } from "react";

function Analytics() {

  const tasks = useSelector(state => state.tasks.taskList);

  const stats = useMemo(() => {

    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    return { total, completed, pending };

  }, [tasks]);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Analytics</h2>

      <p>Total Tasks: {stats.total}</p>
      <p>Completed Tasks: {stats.completed}</p>
      <p>Pending Tasks: {stats.pending}</p>

    </div>
  );
}

export default Analytics;