import React, { memo } from "react";

const CallbackChild3 = (props) => {
    console.log("Callback Child 3 called")
  const { input2 } = { ...props };
  return (
    <div>
      <h3>CallbackChild3</h3>
      <p>{input2}</p>
    </div>
  );
};

export default CallbackChild3;
