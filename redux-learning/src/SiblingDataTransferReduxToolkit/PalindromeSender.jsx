import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setInputString } from './palindromeSlice'
import './PalindromeSender.css'

const PalindromeSender = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => setInputText(e.target.value)
  const sendInputString = () => dispatch(setInputString(inputText))

  return (
    <div className="sender-container">
      <h2 className="title">Palindrome Sender</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        className="input"
        placeholder="Enter a string"
      />
      <button onClick={sendInputString} className="button">
        Check Palindrome
      </button>
    </div>
  )
}

export default PalindromeSender
