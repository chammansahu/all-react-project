import React from "react";
import TodoItem from "./TodoItem";

import AddTodo from "./AddTodo";

const Todos = ({ addTodo,todos,Click,Delete }) => {

  return (
    <div className="todo-container">
      <h1>Todos</h1>

      <ul className="todos">
        <AddTodo submit={AddTodo} />
        {todos.map((todo) => (
          <TodoItem todo={todo} handleClick={Click} handleDelete={Delete} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
