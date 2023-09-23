import { useState } from "react";


function Basic(){
  const [num, setNum] = useState(0);
  const plus = ()=>{
    setNum(num+1)
  }
  const minus = ()=>{
    setNum(num-1)
  }


  const [time, setTime] = useState(1);
  const update = ()=>{
    let newTime;
    setTime(time+1)
    if(time == 24){
      newTime = 1;
      setTime(newTime);
    }
  }
  return(
    <>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <p>{num}</p>
      </div>
      <div>
        <span>현재시간 {time}시</span>
        <button onClick={update}>update</button>
      </div>
    </>
  );
}

export default Basic;