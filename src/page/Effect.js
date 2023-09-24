import { useEffect, useState } from "react";


function Effect(){
  const [count, setCount] = useState(1); 
  const countClick = ()=>{
    setCount(count+1)
  }

  const [names, setNames] = useState("");
  const namesChange = (e)=>{
    setNames(e.target.value)
  }

  useEffect(()=>{
    console.log('렌더링')
  })
  useEffect(()=>{
    console.log('conut 변화')
  },[count])
  useEffect(()=>{
    console.log('names 변화')
  },[names])
  useEffect(()=>{
    console.log('마운팅')
  },[])
  return(
    <div>
      <button onClick={countClick}>update</button>
      <span>count:{count}</span>
      <br/>
      <input type="text" value={names} onChange={namesChange}/>
      <span>이름 : {names}</span>
    </div>
  );
}

export default Effect;