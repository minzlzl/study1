import { useState } from "react";


function Basic(){
  const [num, setNum] = useState(0);

  const plus = ()=>{
    setNum(num+1)
  }
  const minus = ()=>{
    setNum(num-1)
  }
  return(
    <div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <p>{num}</p>
    </div>
  );
}

export default Basic;