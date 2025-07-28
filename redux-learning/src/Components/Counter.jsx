import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const count = useSelector((state) => state.counter.value) 
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button><br/>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </div>
  )
}

export default Counter
