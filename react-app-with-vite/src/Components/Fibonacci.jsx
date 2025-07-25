import React, { useContext } from 'react'
import { FibonacciContext } from '../App'

const Fibonacci = () => {
  const fib = useContext(FibonacciContext)

  return (
    <div>
      <h2>Fibonacci Series - useContext Hook</h2>
      <ul>
        {fib.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  )
}

export default Fibonacci;
