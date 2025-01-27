import {React,useState} from 'react'
import { TodoCard } from './TodoCard';

export const TodoList = (props) => {
  const{todos,selectedTab}=props; 
  
  const filteredList=selectedTab=='All'?todos:selectedTab=='completed'?todos.filter((val)=>val.complete):todos.filter((val)=>!val.complete)
  
    return (
    <div>
        {filteredList.map((todo,todoIndex)=>{
          if (!todo) return null; 
          return(
            <TodoCard key={todoIndex} {...props} todoIndex={todos.findIndex(val=>val.input==todo.input)} todo={todo}/>
          )
        })}    
    </div>
  )
}


// export const TodoList = (props) => {
//   const{todos}=props; 
//   const [showTodos, setShowTodos] = useState([]);
//   function handleOpen(){
//       console.log(todos.map((val)=>val.input)) 
//       // we can use filter inside map when we have array inside an array 
//       // setShowTodos(todos.map((val)=>val.input))
//       const result=todos.filter((val)=>val.complete===true)
//       setShowTodos(result)

//   }

//   // we can send the prop from sending from top to down like parent to child but we cant send from child to parent 
 
//   const inte=todos.map((ind)=>ind.input)
//   return (
//     <div>
//       <button onClick={handleOpen}>All</button>
//       <button>open</button>
//       <button>completed</button>
//       {/* we are using map here again because the filter return the objects so react doesnt know how to display so thats why we need map to loop and display */}
//       <p>  {showTodos.map((val,index)=><p key={index}>{val.input}</p>)}</p>
//      {/* <p>{inte}</p> */}
      
//     </div>
//   )
// }
