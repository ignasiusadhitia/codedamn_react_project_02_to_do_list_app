import React, { useState, useRef } from 'react'
import './App.css'

function App() {

    const [todoList, setTodoList] = useState([])
    const [currentTask, setCurrentTask] = useState("")

    const inputTask = useRef(null)

    const addTask = () => {
        setTodoList([...todoList, {task: currentTask, completed: false}]) /** everything inside previous to do list + added to do */        
        inputTask.current.value ="";
        setCurrentTask("")
    }

    const deleteTask = (taskToDelete) => {
        setTodoList(todoList.filter((task) => {
            return task.task !== taskToDelete            
        }))
    }

    const completeTask = (taskToComplete) => {
        setTodoList(todoList.map((task) => {
            return task.task === taskToComplete ? {task: taskToComplete, completed: true} : {task: task.task, completed: task.completed ? true : false}
        }))
    }

	return (
		<div className="App">
            <h1>Todo List</h1>  
            <div>
                <input ref={inputTask} text="type" placeholder="Task..." onChange={(event) => {setCurrentTask(event.target.value)}} onKeyDown={(event) => {if (event.keyCode === 13) addTask()}} />
                <button onClick={addTask}>Add Task</button>
            </div>      		
            <hr />	
            <ul>
                {todoList.map((value, key) => {
                    return (
                        <div id="task">
                            <li key={key}>{value.task}</li>
                            <button onClick={() => completeTask(value.task)}>Completed</button>
                            <button onClick={() => deleteTask(value.task)}>X</button>
                            {value.completed ? <h1>Task Completed</h1> : <h1>Task Not Completed</h1>}
                        </div>
                    )
                })}
            </ul>
		</div>
	)
}

export default App
