import React from "react";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const { taskId } = useParams();
  return (
    <div>
      <h2>Edit Task</h2>
      <p>Task Id: {taskId} </p>
      <p>Here, you'll view or edit task details</p>
    </div>
  )
};

export default EditTask;
