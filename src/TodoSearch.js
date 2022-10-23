import React from 'react'
import "./TodoSearch.css"

function TodoSearch() {
  function searchTask(e) {
    console.log(e.target.value);
  }
  return (
    <input
      placeholder='find your task'
      className='TodoSearch'
      onChange={searchTask}
    ></input>
  )
}

export {TodoSearch}