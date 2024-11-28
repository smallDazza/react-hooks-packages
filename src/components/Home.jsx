import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div>
        <h2>Welcome to the Task Manager!</h2>
        <nav>
            <Link to="/tasks">View Tasks</Link> | <Link to="/add-task">Add Task</Link>
        </nav>
    </div>
);
    
export default Home;