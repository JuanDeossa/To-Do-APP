import React from "react"
import { taskContext } from "../TodoContext"
import "./TodoSearch.css"

function TodoSearch() {
  const {searchValue,setSearchValue}=React.useContext(taskContext)
  function searchTask(e) {
    const inputValue = e.target.value
    setSearchValue(inputValue)
  }
  return (
    <>
    <input
      placeholder='find your task...'
      className='TodoSearch'
      onChange={searchTask}
      value={searchValue}
    ></input>
    </>
  )
}

export {TodoSearch}