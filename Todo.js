import React from 'react';
import "./Todo.css"; 

function Todo({ title, caption1, caption2, imgSrc }) {
  return (
    <div className="todo-item">
      <img src={imgSrc} alt={title} />
      <p className="image_caption1">{caption1}</p>
      <p className="image_caption2">{caption2}</p>
    </div>
  );
}

export default Todo;