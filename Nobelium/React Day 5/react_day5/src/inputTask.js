import { useState } from "react";

export function CInput() {

  const [arr, setArr] = useState([""]);
  const [todo, setTodo] = useState("");
  function handleClick() {
    setArr([...arr, todo]);
  }

  function capture(event) {
    setTodo(event.target.value);
  }

  return (
    <div style={{marginTop:"100px"}}>
      <input value={todo} type="text" onChange={capture}/>
      <button onClick={handleClick}>Add</button>
      <ul style={{ listStyle: "none"}}>
        {arr.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}