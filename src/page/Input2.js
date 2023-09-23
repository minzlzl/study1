import { useState } from "react";


function Input2(){
  const [data, setData] = useState({
    name:"",
    age:"",
    email:""
  });

  const changes = (e)=>{
    console.log(e.target.id)
  }
  return(
    <div>
      <label>
        이름 : <input type="text" id="name" onChange={changes}/>
      </label>
      <br/>
      <label>
        나이 : <input type="text" id="age" onChange={changes}/>
      </label>
      <br/>
      <label>
        이메일 : <input type="text" id="email" onChange={changes}/>
      </label>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default Input2;