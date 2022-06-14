import React from "react";
import {useLocalStorage} from './useLocalStorage'

const TaskContext=React.createContext()

function TaskProvider(props){
    //crear los estados
  const {item:tasks, saveItem:saveTasks, loading,error}=useLocalStorage('TASKS_V1', [])
  //estos valores van a ser pasados al componente Search
  const [searchValue, setSearchValue]=React.useState('')

  //Estado del modal
  const [openModal,setOpenModal]=React.useState(false)
  
  //para analizar la cantidad de tareas que hay comletadas con completed true
  const completedTasks=tasks.filter(task => !!task.completed).length
  const totalTasks=tasks.length

  //para filtrar las tareas con lo que ingresa el usuario
  let searchedTasks=[]

  //para verificar si el usuario ha escrito algo
  if(searchValue.length >= 1){
  //Si escribio, se filtrara en en el arreglo de tareas si el texto del input contiene al texto ingresado por el user
    //primero pasamos todo a minusculas para optimizacion
  searchedTasks = tasks.filter(task => {
    const taskText=task.text.toLowerCase()
    const searchText=searchValue.toLowerCase()

    return taskText.includes(searchText)
  }) 
}
else{
  searchedTasks=tasks
}


//function para la persistencia de datos para completar y elimnar tareas



//Para completar o eliminar tasks
  //Vamos a buscar la tarea con ese texto, hacer un nuevo array igual al anterior, y vamos a ponerle true al completado
    //Para que el nuevo task sea con los completados correspondientes
const completeTask= (text) => {
  const indexTask= tasks.findIndex(task => task.text === text)
  const newTasks=[...tasks]//injectar un array en otro
  newTasks[indexTask].completed=true 
  saveTasks(newTasks)
}

  //va a bucar la tarea y va a eliminar la que encuentre con ese index, para que el nuevo task se muestre sin ella
const deleteTask= (text) => {
  const indexTask= tasks.findIndex(task => task.text === text)
  const newTasks=[...tasks]//injectar un array en otro
  newTasks.splice(indexTask, 1)
  saveTasks(newTasks)
}

//add task
const addTask= (text) => {
  const newTasks=[...tasks]//injectar un array en otro
  newTasks.push({
    completed:false,
    text,
  })
  saveTasks(newTasks)
}

  //Todos los hijos o nietos de los componentes dentro del provider van a poder usar estos valores sin necesidad de
    //pasarselos individualmente
    return(
        <TaskContext.Provider value={{
          loading,
          error,
          totalTasks,
          completedTasks,
          searchValue,
          setSearchValue,
          searchedTasks,
          completeTask,
          deleteTask,
          addTask,
          openModal,
          setOpenModal,
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export {TaskContext,TaskProvider}