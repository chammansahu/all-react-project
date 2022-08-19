import React, { Component } from "react";
const TodoItem = ({todo,handleClick,handleDelete}) => {
 

  return (
  
    <div className="todoItem">
      <li
        className={`li ${todo.completed ? "completed" : ""}`}
        onClick={(e)=>handleClick(todo.id)}
      >
       {todo.title}
      </li>
      
      <button onClick={()=>handleDelete(todo.id)} className="btn delete">x</button>
    </div>
  );
};

export default TodoItem;
