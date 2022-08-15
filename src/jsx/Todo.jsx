import React, { useState } from 'react';


function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value)
    const onSubmit = (event) => {
      event.preventDefault();
      if(todo === ""){
        return
      }
      setTodos((currentArray)=> [todo, ...currentArray])
      setTodo("");
     };
    console.log(todos)
    return ( 
        <div>
        <hi>My todo ({todos.length})</hi>
        <form onSubmit={onSubmit}>
           <input 
              onChange={onChange} 
              value={todo} 
              type="text" 
              placeholder="write your to do ..." 
            />
           <button>add to do</button>
        </form>
        <hr />
        {todos.map((item,index)=> <li key={index} className="li">{item}</li>)}
      </div>
     );
}

export default Todo;