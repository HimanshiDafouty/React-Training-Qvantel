import React, { useRef, useState } from 'react'

const UnControlledComponent = () => {
    const nameValue = useRef()
    const submitHandler=(e)=>
    {
        e.preventDefault()
        alert(`${nameValue.current.value} Success `)

    }
  return (
    <div>
        <h2>UnControlledComponent</h2>
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <br />
            <input type="text" ref={nameValue} />
            <br />
            <button type ="submit">Submit</button>


        </form>
        
    </div>
  )
}

export default UnControlledComponent