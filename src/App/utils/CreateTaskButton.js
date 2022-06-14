import React from "react";
import './CreateTaskButton.css'

function CreateTaskButton(props){
    //Creamos la funcion para el evento
    const onClickButton = () => {
        //Para cambiar el estado del modal
        props.setOpenModal( prevState => !prevState )
    }
    return(
        <button className="CreateTodoButton" onClick={onClickButton}>+</button>
    );
}

export { CreateTaskButton };