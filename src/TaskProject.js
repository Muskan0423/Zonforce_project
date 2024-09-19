import React, { useEffect, useState } from 'react'
// import {MarkTask} from './MarkTask';
import { Form } from './Form';
import Filter from './Filter';
import List from './List';

const TaskProject = () => {
    const [tsk,settsk]=useState([]);
    const[filter,setFilter]=useState([]);


    useEffect(()=>{
        const savetask=JSON.parse(localStorage.getItem("tasks"));
        
    })
useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tsk))
},[tsk]);


const add=(task)=>{
    settsk((prev)=>[...prev,{id:Date.now(),text:task,value:false},]

    )
};

const edit=(id,newText) => {
    settsk((prev)=>
        prev.map((task)=>task.id===id ? {...task,text:newText} : task)
    )
};


const deletetsk =(id)=>{
    settsk((prev)=>prev.filter((task)=>task.id != null))
    console.log(tsk,"tasksksks");
    tsk.pop()
    

}


const taskCompletion=(id)=>{
    settsk((prev)=>
        prev.map((task)=>task.id===id ? {...task,value:task.completed} : task)
    )
};


  return (
    <div>
      <Form add={add}/>
      <Filter setFilter={setFilter}/>
      <List
      tsk={tsk}
      filter={filter}
        edit={edit}
        deletetsk={deletetsk}
        taskCompletion={taskCompletion}
      />
    </div>
  )
}

export default TaskProject
