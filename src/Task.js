import React, { useEffect, useState } from 'react'
import {TaskProject} from TaskProject;

const Task = () => {
    const [tsk,settsk]=useState([]);


    useEffect(()=>{
        const savetask=JSON.parse(localStorage.getItem("tasks"));
        
    })
useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tsk))
},[tsk]);


const add=(task)=>{
    settsk((prev)=>[...prev,{id:Date.Now(),text:task,value:false},]

    )
};

const edit=(id,newText) => {
    settsk((prev)=>
        prev.map((task)=>task.id===id ? {...task,text:newText} : task)
    )
};


const deletetsk =(id)=>{
    settsk((prev)=>prev.filter((task)=>task.id != null))

}


const taskCompletion=()=>{
    settsk((prev)=>
        prev.map((task)=>task.id===id ? {...task,value:task.completed} : task)
    )
};


  return (
    <div>
      <p>Hello</p>
    </div>
  )
}

export default Task
