import React from 'react'

const ChildComponent = (props) => {
    const sendMessage = () =>{
        const data = "Hello data is being transfered from child component to parent through callback function"
        props.sendData(data);

    }
  return (
    <div>
        <h1>Child Component</h1>
        <button onClick = {sendMessage}>Click here to pass data from child to parent through calback approach</button>
    </div>
  )
}

export default ChildComponent