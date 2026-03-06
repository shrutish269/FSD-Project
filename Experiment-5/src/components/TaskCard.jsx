import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/slices/taskSlice";

function TaskCard({ task }) {

  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>

      <h3>{task.title}</h3>

      <p>
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <button onClick={() => dispatch(toggleTask(task.id))}>
        Toggle
      </button>

      <button onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </button>

    </div>
  );
}

export default TaskCard;