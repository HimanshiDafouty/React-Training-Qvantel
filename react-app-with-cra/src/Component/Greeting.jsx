import React from 'react'

const Greeting = ({isLoggedIn}) => {
  return (
    isLoggedIn?<div>Greeting</div>:<h3>Something went Wrong !!</h3>
  )
}

export default Greeting