import React from 'react'

const Filter = ({setFilter}) => {
  return (
    <div>
      <button onClick={()=>setFilter("All")}>All</button>
      <button onClick={()=>setFilter("completed")}>completed</button>
      <button onClick={()=>setFilter("incompleted")}>incompleted</button>
    </div>
  )
}

export default Filter
