import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/tasksSlice";

function ToDoItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center bg-white shadow p-2 mb-2 rounded">
      <span
        onClick={() => dispatch(toggleTask(task.id))}
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
