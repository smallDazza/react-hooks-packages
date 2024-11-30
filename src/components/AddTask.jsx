import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { useTasks } from "../contexts/TaskContext";

const AddTask = () => {
  const [task, setTask] = useState({
      title: '', description: ''
  });

  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleChange = (e) => {
      const {name, value} = e.target;
      setTask((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      addTask({...task, id: Date.now().toString() });
      navigate('/tasks');
  };

  return (
      <div>
          <h2>Add Task</h2>
          <form onSubmit={ handleSubmit }>
              <div>
                  <label>Title: </label>
                  <input 
                  type='text' 
                  name='title' 
                  value={task.title} 
                  onChange={handleChange} required />
              </div>
              <div>
                  <label>Description: </label>
                  <input 
                  type='textarea' 
                  name='description' 
                  value={task.description} 
                  onChange={handleChange} required />
              </div>
              <button type='submit'>Add Task</button>
          </form>
      </div>
  );
}
  
export default AddTask;