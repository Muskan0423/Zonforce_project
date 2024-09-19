import React, { useMemo } from 'react'
import { MarkTask } from './MarkTask'

const List = ({tsk,filter,edit,deletetsk,taskCompletion}) => {
    const dattofilter=useMemo(()=>{
        if(filter=='completed')
        {
            return tsk.filter(task=>task.completed)
        }
        else if(filter=='incompleted')
            {
                return tsk.filter(task=>!task.completed)
            }
            return tsk;
    },[tsk,filter])
  return (
    <div>
      {dattofilter.map(task=>
        <MarkTask
        key={task.id}
        task={task}
        edit={edit}
        deletetsk={deletetsk}
        taskCompletion={taskCompletion}
        />
      )}
    </div>
  )
}

export default List
