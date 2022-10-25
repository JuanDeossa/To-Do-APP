import React from "react"
import { taskContext } from "../TodoContext"
import "./TodoCounter.css"

function TodoCounter() {
  const {totalTasks,completedTasks}=React.useContext(taskContext)
  return (
    <h2
      className='TodoCounter'>
      You have completed {completedTasks} of {totalTasks} tasks</h2>
  )
}

export {TodoCounter}