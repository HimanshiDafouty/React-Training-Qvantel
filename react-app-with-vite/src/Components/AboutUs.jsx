import React from 'react'
import {useParams} from 'react-router-dom'

const AboutUs = () => {
    const params = useParams()
  return (
    <div>
        <h2>Hello , from AboutUs Component</h2>
        <h4>{params.userName}</h4>
    </div>
  )
}

export default AboutUs