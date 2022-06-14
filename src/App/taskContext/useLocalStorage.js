import React from "react"

function useLocalStorage(itemName, initialValue){
  const [loading,setLoading]=React.useState(true)
  const [error,setError]=React.useState(false)
  const [item, setItem]=React.useState(initialValue)
    //Crear tareas mediante localstorage
      //Para simular la llamada con una api
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          //trae el arreglo de objetos del local storage
        const localStorageItem=localStorage.getItem(itemName)
        let parsedItem
         //verifica si existe ese arreglo, sino lo crea, y lo convierte a un json
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue))
          parsedItem=initialValue
        }else{
          parsedItem=JSON.parse(localStorageItem)
        }
      
        setItem(parsedItem)
        setLoading(false)
        } catch (error) {
          setError(error)
        }
      }, 1000)
    })
      
    
      //para las tareas, por default va a tener las tareas con un array vacio
    
  
    const saveItem = (newItem) => {
    try {
      const stringItem=JSON.stringify(newItem)
      localStorage.setItem(itemName,stringItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
    }
  
    return {item, saveItem, loading,error}
  }

export {useLocalStorage}