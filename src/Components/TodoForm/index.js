import React from 'react'
import { taskContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
    const [newTaskValue,setNewTaskValue]=React.useState('')
    const {addTask,setOpenModal}=React.useContext(taskContext)
    function cancelNewTask() {
        setOpenModal(false)
    }
    function onSubmit(e) {
        e.preventDefault()
        addTask(newTaskValue)
        setOpenModal(false)
    }
    function onChange(e) {
        const value=e.target.value
        setNewTaskValue(value)
    }
    return (
    <form
    className='TodoForm'
    onSubmit={onSubmit}>
        <label >New Task</label>
        <textarea
        placeholder='Write'
        value={newTaskValue}
        onChange={onChange}/>
        <div className='TodoForm-buttonContainer'>
            <button
            className='TodoForm-button TodoForm-button-cancel'
            onClick={cancelNewTask}
            type='button'
            >Cancel
            </button>
            <button
            className='TodoForm-button TodoForm-button-add'
            type='submit'
            >Save
            </button>
        </div>
    </form>
    )
}

export {TodoForm}