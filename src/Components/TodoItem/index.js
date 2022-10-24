import "./TodoItem.css"

function TodoItem(props) {
  const {text,completed,toggleTask,deleteTask}=props
  return (
    <li className='TodoItem'>
        <span
          className='TodoItem__delete'
          onClick={deleteTask}
        ></span>
        <p className={`TodoItem__text ${completed && "TodoItem__text--ok"}`}>{text}</p>
        <span
          className={`TodoItem__ok ${completed && "TodoItem__ok--selected"}`}
          onClick={toggleTask}
        ></span>
    </li>
  )
}

export {TodoItem}
