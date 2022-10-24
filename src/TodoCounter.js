import React from 'react'
import "./TodoCounter.css"

function TodoCounter(props) {
  const {totalTasks,completedTasks}=props
  return (
    <h2
      className='TodoCounter'>
      You have completed {completedTasks} of {totalTasks} tasks</h2>
  )
}

export {TodoCounter}