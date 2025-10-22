import React, { useState } from 'react'
import "./style.css"

function ToDoItem({ task, onDelete, onToggle, onEdit }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);


    const handleEdit = () => {
        if (isEditing) {
            onEdit(task.id, editText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <li className='todo-item'>
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <span
                    className={task.completed ? "completed" : ""}
                    onClick={() => onToggle(task.id)}
                >
                    {task.text}
                </span>
            )}

            <div>
                <button className='edit-btn' onClick={handleEdit}>
                    {isEditing ? "Save" : "Edit"}
                </button>

                <button className='delete-btn' onClick={() => onDelete(task.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}

export default ToDoItem