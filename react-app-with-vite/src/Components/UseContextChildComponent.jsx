import React, { useContext } from 'react'
import { childComponentContext } from '../App'

const UseContextChildComponent = () => {
    const data = useContext(childComponentContext)
  return (
    <div>useContextChildComponent
        <h1>{data}</h1>
    </div>
  )
}

export default UseContextChildComponent