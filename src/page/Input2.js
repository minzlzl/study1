import { useState } from "react";


function Input2(){
  const [inputs, setInputs] = useState({
    name:"",
    age:"",
    email:""
  });

  // const inputs = {name,age,email}

  const {name,age,email} = inputs
  // const name = inputs.name

  const changes = (e)=>{
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
      ...inputs,
      [id]:value
    })
  }
  return(
    <div>
      <label>
        이름 : <input type="text" id="name" value={name} onChange={changes}/>
      </label>
      <br/>
      <label>
        나이 : <input type="text" id="age" value={age} onChange={changes}/>
      </label>
      <br/>
      <label>
        이메일 : <input type="text" id="email" value={email} onChange={changes}/>
      </label>
      <div>
        <p>이름 : {inputs.name}</p>
        <p>나이 : {inputs.age}살</p>
        <p>이메일 : {inputs.email}</p>
      </div>
    </div>
  );
}

export default Input2;