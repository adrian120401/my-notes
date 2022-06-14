import React from 'react'
import { TaskContext } from '../taskContext/taskContext'
import './TaskSearch.css'

//EL componente que use este componente debe enviar dos props para el evento
function TaskSearch(){
    //Recibe las variables desde el context y no como parametro
    const { searchValue, setSearchValue }=React.useContext(TaskContext)
    //Creamos un estado
    //va a recibir dos valores, el estado y una funcion que va a permitir cambiar el estado(por ejemplo por un evento)
    //const [searchValue, setSearchValue] = React.useState('')//por defecto recibe un string vacio

    //se llama al parametro event, es decir, a cada evento ingresado por el usuario, en este caso, cuando escribe
        //despues se filtra el value de todo el evento, es decir las letras que ingresa
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    return(
        <input
        type="text"
        className="TodoSearch"
        placeholder="Task.."
        value={searchValue}
        onChange={onSearchValueChange}
      />
    )
}

export { TaskSearch }

