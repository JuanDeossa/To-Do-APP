import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

import React from "react";
const defaultTasks = [
  {text:"clean room",completed:false},
  {text:"play games",completed:false},
  {text:"eat pizza",completed:false},
  {text:"sleep",completed:false},
]

function App() {
  const [searchValue,setSearchValue] = React.useState("")
  const [tasks,setTask] = React.useState(defaultTasks)
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task=>!!task.completed).length
  let searchedTasks=[]
  if (searchValue.length===0) {
    searchedTasks=tasks
  }else{
    const searchedValue=searchValue.toLowerCase()
    searchedTasks=tasks.filter(task=>{
      const taskText = task.text.toLowerCase()
      return taskText.includes(searchedValue)
    })
  }

  return (
    <>
      <TodoCounter
        totalTasks={totalTasks}
        completedTasks={completedTasks}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTasks.map(task=>(
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

