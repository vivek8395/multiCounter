import React,{useState,useEffect} from 'react'
import Counter from './component/Counter'
import './index.css'

const App = () => {
  const [counter, setcounter] = useState(['counter-0'])
  const [add, setadd] = useState(false)
const handler=()=>{
let newCounter=`counter-${counter.length}`
setcounter([...counter,newCounter])
 }

  return (
    <div   >
      <div className='add'>
      <button onClick={handler}>AddCounter</button> 
      </div>
      
          {counter.map(addCounter=>(<Counter/>))}
          
         
       
    </div>
  )
}

export default App
