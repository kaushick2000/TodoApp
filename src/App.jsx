import React, { useState,useEffect } from 'react'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoCard } from './components/TodoCard'

function App() {

   // const todos=[
   //    {input:'hello,go to swimming pool' ,complete:false},
   //    {input:'hello,go to gym pool' ,complete:true},
   //    {input:'hello,go to yoyo pool' ,complete:true}
      
   // ]
   const [todos,setTodos]=useState([
      {input:'hello,go to swimming pool' ,complete:false},
      {input:'hello,go to dancing pool' ,complete:true},
   ]) 
 
   console.log(todos.complete)
   const [selectedTab,setSelectedTab]=useState('open')
   function handleAdd(newTodo){
      const newTodoList=[...todos,{input:newTodo,complete:false}]
      setTodos(newTodoList)
      handleSave(newTodoList)
      
   }
   function handleEdit(index){
       let newTodoList=[...todos]
       let completedTodo=todos[index]
       completedTodo['complete']=true
       newTodoList[index]=completedTodo
       setTodos(newTodoList)
       handleSave(newTodoList)
   } 

   function handleDelete(index){
      let newTodoList=todos.filter((val,valInded)=>{
         return valInded!==index
      }) 
      setTodos(newTodoList)
      handleSave(newTodoList)
   } 


   // todos is the state which we are storing inside localStorage
   function handleSave(currTodos){
      localStorage.setItem('todo-app',JSON.stringify({todos:currTodos}))
   }
   // it is best practice to keep the useeffect above the retrurn like keep it last
   // the useeffect is used to fetch the data for first time after that the update data are got from the state using the settodo
   useEffect(()=>{
      if(!localStorage || !localStorage.getItem('todo-app')){return}
      let db=JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)

   },[])
   
   return (
    <> 
    {/* the name which we assign for props the same name should be used in the passing fn */}
    <Header todo={todos}/>
    <Tabs todo={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    <TodoList todos={todos} selectedTab={selectedTab} handleDelete={handleDelete} handleEdit={handleEdit} />
    <TodoInput handleAdd={handleAdd}  />
    
     </>
  )
}

export default App
