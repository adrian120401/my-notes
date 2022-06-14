import React from 'react'
import { Modal } from '../Modal/Modal';//exportar modal
import { TaskContext } from './taskContext/taskContext';
import { TaskCounter } from './utils/TaskCounter';
import { TaskSearch } from './utils/TaskSearch';
import { TaskList } from './utils/TaskList'
import { TaskItem } from './utils/TaskItem'
import { CreateTaskButton } from './utils/CreateTaskButton'
import {TaskForm} from './utils/TaskForm'

function AppUI(){
    //traer variables del context para usarlas
    const {error,loading,searchedTasks,completeTask,deleteTask,openModal,setOpenModal}=React.useContext(TaskContext)
    return (
        <React.Fragment>
        <TaskCounter />
        
        <TaskSearch />
        
        
            <TaskList>
            {error && <p>Lo siento, hubo un error...</p>}
            {loading && <p>Cargando las tareas...</p>}
            {(!loading && !searchedTasks.length) && <p>¡Crea tu primer tarea!</p>}

            {searchedTasks.map(task =>(
                    <TaskItem key={task.text} 
                     text={task.text} 
                     completed={task.completed} 
                        onComplete={()=>completeTask(task.text)}
                     onDelete={()=>deleteTask(task.text)}/>
            ))}
            </TaskList> 
        
        {openModal &&(
           <Modal>
            <TaskForm></TaskForm>
            </Modal>  
        )}
         


        <CreateTaskButton
            setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}
export {AppUI} 