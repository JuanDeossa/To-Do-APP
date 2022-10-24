import React from 'react'
import "./TodoItem.css"

function TodoItem(props) {
  const {text,completed}=props
  function deleteTask(task) {
    console.log(`You deleted the task: ${task}`);
  }
  // function completeTask(task) {
  //   console.log(`You completed the task: ${task}`);
  // }
  return (
    <li className='TodoItem'>
        <span
          className='TodoItem__delete'
          onClick={()=>deleteTask(text)}
        >🅧</span>
        <p className={`TodoItem__text ${completed && "TodoItem__text--ok"}`}>{text}</p>
        <span
          className={`TodoItem__ok ${completed && "TodoItem__ok--selected"}`}
          onClick={props.toggleTask}
        ></span>
    </li>
  )
}

export {TodoItem}

//☐☑