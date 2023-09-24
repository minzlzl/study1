import { useState } from "react";


function Basic2 (){
  let [name, setName] = useState(['강남 맛집','강서 맛집']);
  const [like, setLike] = useState(0);
  const likeClick = ()=>{
    setLike(like+1);
  };
  return(
    <div>
      <h3>{name[0]} <span style={{cursor:"pointer"}} onClick={likeClick}>👍</span>{like}</h3>
      <p>2월17일 방문</p>
      <hr/>
      <h3>{name[1]} <span style={{cursor:"pointer"}} onClick={ ()=>{setLike(like+1)}}>👍</span>{like}</h3>
      <p>2월17일 방문</p>
      <hr/>
    </div>
  );
}

export default Basic2;