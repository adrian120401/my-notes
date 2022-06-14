import React from "react";
import './TaskItem.css'

function TaskItem(props){
    return(
        <li className="TodoItem">
            
            <img className={`Icon Icon-check 
            ${props.completed&&'Icon-check--active'}`}
            onClick={props.onComplete} src="../check.png" alt="check icon"></img>
              
            <p className={`TodoItem-p ${props.completed&&'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <img src="../papelera-de-reciclaje.png" className="Icon Icon-delete"
            onClick={props.onDelete} alt="delete icon"></img>
        </li>
    );
}

export { TaskItem };


//<span className="Icon Icon-delete"
//            onClick={props.onDelete}>
//                X
//            </span>
//<span className={`Icon Icon-check ${props.completed&&'Icon-check--active'}`}
//            onClick={props.onComplete}>
//                V
 //           </span>