import React, { useCallback,memo } from "react";

const CallbackChild1 = (props) => {
  console.log("Callback Child 1 called");
  const { input1, setInput1 } = { ...props };

  const changeHandler = useCallback((e) => {
    setInput1(e.target.value);
  }, [input1]);
  return (
    <div>
      <h3>Callback Child 1</h3>
      <input value={input1} onChange={changeHandler} />
    </div>
  );
};

export default memo(CallbackChild1);
