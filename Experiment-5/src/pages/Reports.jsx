import { useSelector } from "react-redux";

function Reports() {

  const tasks = useSelector(state => state.tasks.taskList);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Reports</h2>

      <h3>Task List</h3>

      {tasks.map(task => (
        <p key={task.id}>
          {task.title} - {task.completed ? "Completed" : "Pending"}
        </p>
      ))}

    </div>
  );
}

export default Reports;