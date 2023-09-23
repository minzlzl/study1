import { useState } from "react";


function Input1(){
  const [data, setData] = useState();

  const change = (e)=>{
    setData(e.target.value)
  }
  return(
    <div>
      <input type="text" onChange={change}/>
      <p>{data}</p>
    </div> 
  );
}

export default Input1;