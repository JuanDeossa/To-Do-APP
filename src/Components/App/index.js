import React from "react";
import { AppUI } from "./AppUI.js";

// const defaultTasks = [
//   {text:"clean room",completed:false},
//   {text:"play games",completed:false},
//   {text:"eat pizza",completed:false},
//   {text:"sleep",completed:false},
// ]


function App() {
  //Localstorage
  const localStorageVersion = "TASKS_V1"
  const localStorageTasks = localStorage.getItem(localStorageVersion)
  let parsedTasks
  if (!localStorageTasks) {
    localStorage.setItem(localStorageVersion,"[]")
    parsedTasks=[]
  } else {
    parsedTasks=JSON.parse(localStorageTasks)
  }

  function saveTasks(newTasks) {
    const strTasks=JSON.stringify(newTasks)
    localStorage.setItem(localStorageVersion,strTasks)
    setTask(newTasks)
  }
  //
  const [searchValue,setSearchValue] = React.useState("")
  const [tasks,setTask] = React.useState(parsedTasks)
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

  function toggleTaskState(taskValue) {
    const index = tasks.findIndex(task=>task.text===taskValue)
    const newTasks = [...tasks]
    if (newTasks[index].completed) {
      newTasks[index].completed=false
    } else {
      newTasks[index].completed=true
    }
    saveTasks(newTasks)
  }

  function deleteTask(taskValue) {
    const index = tasks.findIndex(task=>task.text===taskValue)
    const newTasks = [...tasks]
    if (index>=0) {
      newTasks.splice(index,1)
    }
    saveTasks(newTasks)
  }

  return (
    <AppUI
      totalTasks={totalTasks}
      completedTasks={completedTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTasks={searchedTasks}
      toggleTaskState={toggleTaskState}
      deleteTask={deleteTask}
    />
  );
}

export {App}

