import React,{useState} from 'react'
import "./style.css"

const Counter = () => {
    const [count, setcount] = useState(0)
    console.log("click")
    return (
        <div className='counter'>  
          Count is:<b>{ count } </b> 
            <button onClick={()=>setcount(count+1)} className='addbtn'>Increase</button>
            <button onClick={()=>setcount(count-1)}>Decrease</button>
           
        </div>
    )
}

export default Counter
