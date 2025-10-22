import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/tasksSlice";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const tasks = useSelector((state) => state.tasks);

  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks for now</p>;
  }
  return (
    <ul className="w-72">
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default ToDoList;
