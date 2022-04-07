
import {useState} from "react";

function Button(){

    const [count,setCount] = useState(0)

    const handleInc = () => {
        setCount(count + 1)
    }

    const handleDec = () =>{
        setCount(count - 1)
    }

    const handleDouble = () =>{
        setCount(count*2)
    }

    return(
        <>

            <h1>{count}</h1>

            <button onClick={() => handleInc()}>INC</button>
            <button onClick={() => handleDec()}>DEC</button>

            <button onClick={() => handleDouble()}>DOUBLE</button>
        
        </>
    )
       
}

export default Button;