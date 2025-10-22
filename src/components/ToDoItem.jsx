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
            <div className="task-text">
                {!isEditing&&(
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                    />
                )}
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                    <span className={task.completed ? "completed" : ""}>
                            {task.text}
                    </span>
                    )}
                </div>

            <div className='button-grp'>
                <button className='edit-btn' onClick={handleEdit}>
                    {isEditing ? "Save" : "Edit"}
                </button>

                <button className='delete-btn' onClick={() => onDelete(task.id)}>
                    Delete
                </button>
            </div>
        </li >
    );
}

export default ToDoItem