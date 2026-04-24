import React, { useState } from "react";
import TaskList from "./child";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bgColor, setBgColor] = useState("white");

  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setMessage(`Task added: ${task}!`);
    setTask("");
    setBgColor("lightblue");
  };

  return (
    <div className="container mt-5">
      <h1 style={{ backgroundColor: bgColor, padding: "10px" }}>
        Task Planner
      </h1>

      <div className="card p-4 mb-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <TaskList tasks={tasks} message={message} />
    </div>
  );
}

export default App;