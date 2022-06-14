import React from "react";
import { TaskContext } from "../taskContext/taskContext";
import './TaskForm.css'

function TaskForm(){
    const [newTasksValue,setnewTasksValue]=React.useState('')
    const {addTasks,setOpenModal}=React.useContext(TaskContext)
    const onCancel = () =>{
        setOpenModal(false)
    }
    const onSubmit = (event) =>{
        event.preventDefault()
        addTasks(newTasksValue)
        setOpenModal(false)
    }
    const onChange = (event) =>{
        setnewTasksValue(event.taget.value)
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Enter your task...</label>
            <textarea 
                value={newTasksValue} 
                onChange={onChange}
                placeholder="Enter here your task and add to all tasks">
                </textarea>
            <div className="TasksForm-buttonContainer">
                <button className="TasksForm-button TasksForm-button-cancel" type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button className="TasksForm-button TasksForm-button-add" type="submit">
                    Add
                </button>
            </div>
        </form>
    )
}

export{TaskForm}