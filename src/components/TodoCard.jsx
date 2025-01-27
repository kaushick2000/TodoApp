import React from 'react'

export const TodoCard = (props) => {

  const{todo,handleDelete,todoIndex,handleEdit}=props
  
 
  return (
    <div className='card todo-item'>
     <p>{todo.input}</p>
     <div>
      <button onClick={()=>{handleEdit(todoIndex)}} disabled={todo.complete} > <h6>Done</h6></button>
     
      <button onClick={()=>handleDelete(todoIndex)}> <h6>Delete</h6></button>
     </div>

    </div>
  )
}
