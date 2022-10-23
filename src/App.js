import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

import React from "react";

function App(props) {
  const toDoS = [
    {text:"clean room",completed:false},
    {text:"play games",completed:false},
    {text:"eat pizza",completed:false},
    {text:"sleep",completed:false},
  ]
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {toDoS.map(toDo=>(
          <TodoItem key={toDo.text} text={toDo.name}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;

