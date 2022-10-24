import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";

function AppUI({
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue,
    searchedTasks,
    toggleTaskState,
    deleteTask,
    }){
    return(
    <>
        <TodoCounter
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        />
        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        <TodoList>
        {searchedTasks.map(task=>(
            <TodoItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            toggleTask={()=>toggleTaskState(task.text)}
            deleteTask={()=>deleteTask(task.text)}
            />
        ))}
        </TodoList>
        <CreateTodoButton/>
    </>)
}

export {AppUI}