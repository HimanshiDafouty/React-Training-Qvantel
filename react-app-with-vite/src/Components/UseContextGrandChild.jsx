import React, { useContext } from 'react'
import { childComponentContext } from '../App'

const UseContextGrandChild = () => {
    const data = useContext(childComponentContext)
  return (
    <div>useContextGrandChild
        <h1>{data}</h1>
    </div>
  )
}

export default UseContextGrandChild