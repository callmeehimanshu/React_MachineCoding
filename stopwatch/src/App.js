
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [timer,setTimer]=useState(0);
  const id=useRef(0)
  const [toggle,setToggle]=useState(false)
  const handleStart=()=>{
      id.current= setInterval(()=>{
        setTimer((timer)=>{
          return(
            timer+1
          )
        })
       },1000)
       setToggle(false)
  }
  const handlePause=()=>{
    clearInterval(id.current)
    setToggle(false)
  }
  const handleRefresh=()=>{
    clearInterval(id.current)
    setTimer(0)
  }
  return (
    <div className="container">
     <div>
     <h2>{timer}</h2>
     </div>
      <div className='buttons'>
      <button onClick={()=>handleStart()} disabled={toggle}>Start</button>
      <button onClick={handlePause} >Pause</button>
      <button onClick={()=>{return(handleRefresh())}}>Refresh</button>
      </div>
      
    </div>
  );
}

export default App;
