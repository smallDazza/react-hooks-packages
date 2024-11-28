import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTasks";

function App() {
  return (
    <Router>
      <div>
        <Home />
        <Routes>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/taskId:" element={<EditTask />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
