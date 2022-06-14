import React from 'react'
import { TaskContext } from '../taskContext/taskContext'
import './TaskCounter.css'

//Recibe los parametros del componente padre que seran usados para mostrar la cantidad de tareas
function TaskCounter(){
  const {totalTasks,completedTasks}=React.useContext(TaskContext)
    return(
    <h2 className="title-counter">{completedTasks} of {totalTasks} completed tasks</h2>
    )
  }

//Para que el nombre sea si o si ese en el import
export { TaskCounter }