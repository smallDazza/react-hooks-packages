import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description
    };

    setTasks([...tasks, newTask]);
    navigate("/tasks");
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
