import React, { useRef, useState } from 'react'

function Ref() {
  const [count, setCount] = useState(0);
  const stateClick = ()=>{
    setCount(count+1);
  };
  console.log('랜더링되는중....');

  const counterRef = useRef(0);
  console.log(counterRef);
  const refClick = ()=>{
    counterRef.current = counterRef.current+1;
  }
  return (
    <div>
      <p>state : {count}</p>
      <button onClick={stateClick}>state 올려</button>
      <p>ref : {counterRef.current}</p>
      <button onClick={refClick}>ref 올려</button>
    </div>
  )
}

export default Ref