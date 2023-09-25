import React, { useEffect, useRef, useState } from 'react'

function Ref2() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);
  
  useEffect(()=>{
    renderCount.current = renderCount.current+1;
    // console.log(renderCount.current)
  });


  const inputRef = useRef();
  useEffect(()=>{
    // console.log(inputRef);
    inputRef.current.focus();
  },[])
  return (
    <>
    <div>
      <p>Count : {count}</p>
      <button onClick={()=>{setCount(count+1)}}>올려</button>
    </div>
    <br/>
    <div>
      <input ref={inputRef} type="text" placeholder='username'/>
      <button onClick={()=>{alert(`환영합니다 ${inputRef.current.value}님`)}}>로그인</button>
    </div>
    </>
  )
}

export default Ref2