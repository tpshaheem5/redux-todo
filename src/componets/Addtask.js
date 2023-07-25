import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Redux/TodoSlice';
import './Addtask.css';

function Addtask() {
  const taskRef = useRef(null);
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todo.data);
  const handleSubmit = () => {
    const task = taskRef.current.value;
    dispatch(add({ name: task }));
    taskRef.current.value = '' // Clear the input value
  };
  const del = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="add-task-container">
      <div className="add-task-form">
        <label>Add Tasks</label>
        <input type="text" ref={taskRef} />
        <button onClick={() => handleSubmit()}>Add Task</button>
      </div>
      <div className="task-list">
        {lists.map((e) => (
          <div className="task-item" key={e.id}>
            <h3>{e.name}</h3>
            <button className="edit-btn">Edit</button>
            <button onClick={() => del(e.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Addtask;
