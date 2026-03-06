import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";
import TaskCard from "../components/TaskCard";

function Tasks() {

  const tasks = useSelector(state => state.tasks.taskList);
  const dispatch = useDispatch();

  const handleAdd = () => {

    const newTask = {
      id: Date.now(),
      title: "New Task",
      completed: false
    };

    dispatch(addTask(newTask));
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Tasks</h2>

      <button onClick={handleAdd}>
        Add Task
      </button>

      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}

    </div>
  );
}

export default Tasks;