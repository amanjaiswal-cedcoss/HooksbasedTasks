import React, { useState } from 'react'
import CallbackChild1 from './CallbackChild1'
import CallbackChild2 from './CallbackChild2'
import CallbackChild3 from './CallbackChild3'

const CallbackHook = () => {
  const [input1,setInput1]=useState("")
  const [input2,setInput2]=useState("")
  return (
    <div>
      <h2>useCallback Task</h2>
      <CallbackChild1 input1={input1} setInput1={setInput1}/>
      <CallbackChild2 input1={input1} input2={input2} setInput2={setInput2}/>
      <CallbackChild3 input2={input2}/>
      <hr/>
    </div>
  )
}

export default CallbackHook