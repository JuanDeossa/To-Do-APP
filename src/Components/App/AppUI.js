import { taskContext } from "../TodoContext/index.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import './App.css'
import React from "react";

function AppUI(){
    const {
        error,
        loading,
        deleteTask,
        toggleTaskState,
        searchedTasks
    }=React.useContext(taskContext)
    return(
    <>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
        {error && <p className="stateMessage">error...</p>}
        {loading && <p className="stateMessage">loading...</p>}
        {(!loading && !searchedTasks.length) && <p className="stateMessage">Create a new task &#10549;</p>}
        {searchedTasks.map(task=>(
            <TodoItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            toggleTask={()=>toggleTaskState(task.text)}
            deleteTask={()=>deleteTask(task.text)}
            />
        ))}
        </TodoList>
        <CreateTodoButton/>
    </>)
}
export {AppUI}