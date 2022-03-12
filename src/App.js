
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[data,setData]=useState(0)
  const[age,setAge]=useState(0)

  useEffect(()=>{
    console.log("user effect 1")
  },[data]);

  useEffect(()=>{
    console.log("user effect 2")
  },[age]);
  
  useEffect(()=>{
    console.log("after")
  },[data,age]);
  
  
  return (
    <div className="App">
    <h3>Counter:{data}</h3>
    <h3>Age:{age}</h3>
    <button onClick={() =>{
      setData(data+1)
    }}>click</button>

    <button onClick={()=>{
      setAge(age+1)
    }}>click</button>
    </div>
  );
}

export default App;
