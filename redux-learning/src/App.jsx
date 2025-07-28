import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Name from './Components/Name'
import CounterReduxjsToolkit from './Components/CounterReduxjsToolkit'
import UserList from './ReduxThunk/UserList'
import PalindromeSender from './SiblingDataTransferReduxToolkit/PalindromeSender'
import PalindromeReceiver from './SiblingDataTransferReduxToolkit/PalindromeReceiver'

function App() {
  

  return (
    <>
    {/* <Counter/>
    <Name /> */}
    {/* <CounterReduxjsToolkit/>
    <Name/> */}
    {/* <UserList/> */}
    <h2>Redux Palindrome Checker</h2>
    <PalindromeSender/>
    <PalindromeReceiver/>
          
          
    </>
  )
}

export default App
