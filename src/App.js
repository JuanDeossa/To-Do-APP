import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

import React from "react";

function App(props) {
  const [searchValue,setSearchValue] = React.useState("")
  const defaultTasks = [
    {text:"clean room",completed:false},
    {text:"play games",completed:false},
    {text:"eat pizza",completed:false},
    {text:"sleep",completed:false},
  ]
  const [tasks,setTask] = React.useState(defaultTasks)
  return (
    <>
      <TodoCounter/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {tasks.map(task=>(
          <TodoItem
          key={task.text}
          text={task.text}
          completed={task.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;

