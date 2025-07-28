import React, { useRef } from 'react'

const UseRefHook = () => {
    const elementRef = useRef()
    const changeBackgroundColor =() =>{
        elementRef.current.style.backgroundColor ="red"

    }
  return (
    <div>
        <h1>useRefHook</h1>
    <h2 ref={elementRef}>Hello Ref Hook</h2>
    <button onClick={changeBackgroundColor}>Click to change color</button>
    </div>
    
  )
}

export default UseRefHook