import React from 'react'
import { AppUI } from './AppUI'
import {TaskProvider} from './taskContext/taskContext'
import './App.css';

//Tareas hardcodeadas
// const defaultTasks=[
//   {text: "Leer documentacion de React", completed:false},
//   {text: "Investigar sobre Java Backend", completed:false},
//   {text: "Hacer ejercicio", completed:true},
//   {text: "Arreglar el entorno de desarrollo", completed:true},
// ]


function App() {
  //los componentes hijos van a  recibir parametros para interactuar entre si, es decir, manejar eventos
  return(
    <TaskProvider>
      <AppUI/>
    </TaskProvider>
    
  )
}


export default App;
