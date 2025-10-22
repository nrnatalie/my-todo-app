import React from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Header />
      <AddTaskForm />
      <ToDoList />
    </div>
  );
}
