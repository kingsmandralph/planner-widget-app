import './App.css';
import { useState } from 'react';
 
function App() {
const [counter, setCounter] = useState(0)
const [counterIncrements, setCounterIncrements] = useState(1)
const [maxium, setMaxium] = useState(100)
const [minimum, setMinimum] = useState(0)
 return (
  <div className="App">
   <div className="innerContainer">
    <h1>Counter App</h1>
    <p style={{textAlign:"center"}}>This is a counter application built by kingsman999🚀🚀, powered by React</p>
    <input type="input" value={counter} onChange={(e)=>{setCounter(e.target.value)}}/>
    <div className="buttonContainer">
     <button onClick={()=>{
      if(counter > minimum){
       setCounter(counter - counterIncrements)
      }
     }}>-</button>
     <button onClick={()=>{
      if(counter < maxium){
       setCounter(counter + counterIncrements)
      }
     }}>+</button>
    </div>
 
    <h2 style={{marginTop:"50px"}}>other settings</h2>
    <p>By increments</p>
    <input type="input" value={counterIncrements} onChange={(e)=>{setCounterIncrements(e.target.value)}}/>
    <div className="buttonContainer">
     <button onClick={()=>{setCounterIncrements(counterIncrements-1)}}>-</button>
     <button onClick={()=>{setCounterIncrements(counterIncrements+1)}}>+</button>
    </div>
 
    <p>Maximum</p>
    <input type="input" value={maxium} onChange={(e)=>{setMaxium(e.target.value)}}/>
    <div className="buttonContainer">
     <button onClick={()=>{setMaxium(maxium-1)}}>-</button>
     <button onClick={()=>{setMaxium(maxium+1)}}>+</button>
    </div>
 
    <p>Minimum</p>
    <input type="input" value={minimum} onChange={(e)=>{setMinimum(e.target.value)}}/>
    <div className="buttonContainer">
     <button onClick={()=>{setMinimum(minimum-1)}}>-</button>
     <button onClick={()=>{setMinimum(minimum+1)}}>+</button>
    </div>
   </div>
  </div>
 );
}
 
export default App;