import React, { useCallback, useState } from 'react'

const ChildUseCallback = ({onhandleClick}) => {
    
  return (
    <div>
        <h1>ChildUseCallback</h1>
        <button onClick={onhandleClick}>Increment</button>
    </div>
  )
}

export default ChildUseCallback