import React, { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import "./components/style.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask, completed: false }
    ]);
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = (id, newText) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className='app-container'>
      <Header />
      <div className='todo-box'>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Enter new Task...'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>
            Add
          </button>
        </div>

        <ToDoList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleComplete}
          onEdit={handleEditTask}
        />
      </div>
    </div>
  )
}

export default App