import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../contexts/TaskContext';

// const TaskData = useContext(TaskContext);
// const tasks = useTasks();
// console.log(tasks);

const Tasks = () => {
    const {tasks, deleteTask} = useTasks();
    const [visibleTasks, setVisibleTasks] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        // Load initial tasks
        setVisibleTasks(tasks.slice(0, 5));
    }, [tasks]);

    const loadMoreTasks = () => {
        // if isFetching is true and visible tasks length < total tasks length
        if (!isFetching && visibleTasks.length < tasks.length) {
            // isFetching == true
            setIsFetching(true);
            // fetch new visible tasks
            const newVisibleTasks = tasks.slice(0, visibleTasks.length + 3);  
            // simulate loading tasks
            setTimeout(() => {
                setVisibleTasks(newVisibleTasks);
                setIsFetching(false);
            }, 500); // Simulate delay
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreTasks();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1.0
            }
        );

        if(loadMoreRef.current) observer.observe(loadMoreRef.current);

        return() => {
            if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
        };
    }, [visibleTasks]);

    return (
        <div>
            <h2>Tasks</h2>
            {
                tasks.length === 0 ? (
                    <p>No tasks found. <Link to='/add-task'>Add your first task!</Link></p>
                ) : (
                    <ul>
                        {visibleTasks.map((task) =>
                            (<li key={task.id}>
                                <strong>{task.title}</strong>: {task.description}
                                <div>
                                    <Link to={`/edit-task/${task.id}`}>Edit</Link> | {' '}
                                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                                </div>
                            </li>)
                        )}
                    </ul>
                )
            }

            {
                visibleTasks.length < tasks.length && (
                    <div ref={loadMoreRef}>
                        {isFetching ? <p>Loading more tasks...</p> : <p>Scroll down for more content.</p>}
                    </div>
                )
            }
        </div>
    );
};

export default Tasks;