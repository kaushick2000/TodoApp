import React from 'react'

export const Header = (props) => {
  const{todo}=props 
  // const todoLength=todo.length
  const todoLength = Array.isArray(todo) ? todo.length : 0;
  return (
    <header>
      
      <h1 className="text-gradient">You have {todo.length} open tasks.</h1>
    </header>
  )
}
