import React from 'react'
import "./TodoSearch.css"

function TodoSearch(props) {
  const {searchValue,setSearchValue}=props
  function searchTask(e) {
    const inputValue = e.target.value
    // console.log(inputValue);
    setSearchValue(inputValue)
  }
  return (
    <>
    <input
      placeholder='find your task'
      className='TodoSearch'
      onChange={searchTask}
      value={searchValue}
    ></input>
    </>
  )
}

export {TodoSearch}