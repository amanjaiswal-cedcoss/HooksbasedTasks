import React, { useCallback,memo } from "react";

const CallbackChild2 = (props) => {
    console.log("Callback Child 2 called")
    const{input1,input2,setInput2}={...props}
    const changeHandler=useCallback((e)=>{
        setInput2(e.target.value)},[input2])
  return (
    <div>
      <h3>CallbackChild2</h3>
      <p>{input1}</p>
      <input value={input2} onChange={changeHandler}/>
    </div>
  );
};

export default memo(CallbackChild2);
