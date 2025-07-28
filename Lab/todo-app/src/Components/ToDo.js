import React, { useState } from 'react';
import './ToDo.css'; // ✅ Importing CSS from same folder

const ToDo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = { text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const deleteTask = (index) => {
    const taskList = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i !== index) {
        taskList.push(tasks[i]);
      }
    }
    setTasks(taskList);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index} className="task-item">
            <span
              className={item.completed ? 'completed' : ''}
              onClick={() => toggleTask(index)}
            >
              {item.text}
            </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
