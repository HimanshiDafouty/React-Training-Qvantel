import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const handleClick=(data)=>{
        document.getElementById("demo").innerHTML= data;
    }
  return (
    <div>
    <h1>Parent Component</h1>
    <h2 id = 'demo'>Hello</h2>
    <ChildComponent sendData= {handleClick}/>
    </div>
  )
}

export default ParentComponent