

import React, { useEffect, useState } from 'react'
export const MarkTask=React.memo(({task,taskCompletion,edit,deletetsk})=>{
    return(
        <div className="task-item">
            <input

            type="checkbox"
            checked={task.completed}
            onChange={()=>taskCompletion(task.id)}
            />
            <p>{task.text}</p>
            <button onClick={()=>edit(task.id)}>
              Edit task
            </button>
            <button onClick={()=>deletetsk(task.id)}>
              Delete task
            </button>

        </div>
    );
});
