import { useState } from "react";
import React from 'react'

export const Tabs = (props) => { 

  const{todo,setSelectedTab,selectedTab}=props;
  const tabs=['All','open','completed']
  
  return (
    <nav>
      {/* if we are writing in the single line inside the callback we dont need the return but we have more than 1 so we need it  */}
      {tabs.map((data,dataIndex)=>{ 

        const tabValues=data==='All'?todo.length:data==='open'?
        todo.filter((x)=>!x.complete).length:
        todo.filter((x)=>x.complete).length
        return(
        <button key={dataIndex} onClick={()=>setSelectedTab(data)} >
          
          <h4>{data}<span>({tabValues})</span></h4>
        </button>)
        
      })}
      

    </nav>
  )
}
