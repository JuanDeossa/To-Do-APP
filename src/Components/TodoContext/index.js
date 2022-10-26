import React from 'react'
import { useLocalStorage } from '../../Hooks/useLocalStorage'

const taskContext=React.createContext()

function TaskProvider(props) {
    const {
        item:tasks,
        saveItem:saveTasks,
        loading,
        error
    }=useLocalStorage("TASKS_V1",[])
    const [searchValue,setSearchValue] = React.useState("")
    const [openModal,setOpenModal]=React.useState(false)
    const totalTasks = tasks.length
    const completedTasks = tasks.filter(task=>!!task.completed).length
    let searchedTasks=[]

    if (searchValue.length===0) {
    searchedTasks=tasks
    }else{
    const searchedValue=searchValue.toLowerCase()
    searchedTasks=tasks.filter(task=>{
        const taskText = task.text.toLowerCase()
        return taskText.includes(searchedValue)
    })
    }

    function toggleTaskState(taskValue) {
        const index = tasks.findIndex(task=>task.text===taskValue)
        const newTasks = [...tasks]
        if (newTasks[index].completed) {
        newTasks[index].completed=false
        } else {
        newTasks[index].completed=true
        }
        saveTasks(newTasks)
    }

    function deleteTask(taskValue) {
    const index = tasks.findIndex(task=>task.text===taskValue)
    const newTasks = [...tasks]
    if (index>=0) {
        newTasks.splice(index,1)
    }
    saveTasks(newTasks)
    }
    return (
        <taskContext.Provider value={{
            loading,
            error,
            totalTasks,
            completedTasks,
            searchValue,
            setSearchValue,
            searchedTasks,
            toggleTaskState,
            deleteTask,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </taskContext.Provider>
    )
}

export {taskContext,TaskProvider}