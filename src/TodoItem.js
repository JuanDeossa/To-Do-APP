import React from 'react'
import "./TodoItem.css"

function TodoItem(props) {
  const {text,completed}=props
  return (
    <li className='TodoItem'>
        <span className='TodoItem__delete'>🅧</span>
        <p className={`TodoItem__text ${completed && "TodoItem__text--ok"}`}>{text}</p>
        <span className='TodoItem__ok'>☑</span>
    </li>
  )
}

export {TodoItem}