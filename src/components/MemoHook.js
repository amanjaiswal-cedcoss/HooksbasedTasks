import React, { useMemo, useState } from "react";

const MemoHook = () => {
  const [btnColor, setBtnColor] = useState("orange");
  const [nums,setNums]=useState({num1:235454,num2:675735})
  const [sum,setSum]=useState(0)
  const multiply = (num1,num2) => {
    console.log("Multiply called");
    return num1 * num2;
  };
  // using useMemoHook to memoize returned value of the multiply function
  const multiplied = useMemo(()=>multiply(nums.num1,nums.num2),[nums]);

  const add = (e) => {
    e.preventDefault();
    setSum(nums.num1+nums.num2)
  };
  const changeButtonColor=()=>{
    if(btnColor==="white"){
      setBtnColor("orange")
    }
    else if(btnColor=="orange"){
      setBtnColor("white")
    }
  }
  return (
    <div id="divMemoHook">
        <h2>useMemo Task</h2>
      <form id="formAdd" onSubmit={add}>
        <input type="number" onChange={(e)=>{setNums({...nums,num1:e.target.value})}} value={nums.num1} name="num1" placeholder="Enter a number" />
        <input type="number" onChange={(e)=>{setNums({...nums,num2:e.target.value})}} value={nums.num2} name="num2" placeholder="Enter a number" />
        <button style={{ backgroundColor: btnColor }} type="submit"
        >
          Add
        </button>
      </form>
      <button onClick={changeButtonColor}>Change Button Color</button>
      {(sum===0)?"":<p>{sum}</p>}
      <hr/>
    </div>
  );
};

export default MemoHook;
