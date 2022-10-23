import React from 'react'

function TodoItem(props) {
  return (
    <li>
        <span>Start</span>
        <p>{props.text}</p>
        <span>End</span>
    </li>
  )
}

export {TodoItem}