import { useState } from "react"

export const Form = ({add})=>{
    const [inputvalue,setinputvalue]=useState("")
    const handleSubmit=(e)=>{
e.preventDefault();
if(inputvalue.trim())
{
    add(inputvalue.trim());
    setinputvalue("");
}
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputvalue}
            onChange={(e)=>{
                setinputvalue(e.target.value)
            }}
            placeholder="Task Added"
            />
            <button type="submit">
                Add Task
            </button>

        </form>
    )

}