import React, { useState, useEffect } from "react";

const AddTodo = ({submit}) => {
  const [title, setTitle] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTitle(title);
    submit(title);
    console.log(title);
    setTitle('')
   
  };
  

  return (
    <form onSubmit={(e)=>submit(title)}>
      <input
        type="text"
        className="input"
        placeholder="Enter your todo"
        autoComplete="off"
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default AddTodo;
