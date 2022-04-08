
import React from "react"

const ToDo = () =>{

    const [task,setTask] = React.useState("")
    const [todo,setTodo] = React.useState([])

    const handleChange = (e)=>{
        // console.log("changing input", e.target.value)
        setTask(e.target.value)
    }

    const handleClick = () =>{
        setTodo([...todo,task])
    }

    return (
        <>
            <h1>ToDo</h1>
            <input type={"text"} placeholder="Enter" onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
            {todo.map((item) =>{
                return <h4>{item}</h4>

            })}
        </>
    )

}

export default ToDo;