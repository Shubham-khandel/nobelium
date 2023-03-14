import React from "react";
import { useState } from "react";

export default function Main() {
  const [data, setData] = useState([]);
  const [list, setList] = useState("");
  const [count, setCount] = useState(0);


  function inputD(event) {
    setList(event.target.value);
  }

  function clicked() {
    if (!list) {

    } else {
      setData([...data, list]);
      setList("");
      setCount(count + 1);
    }
  }

  function deleteItem(id) {
    const deletee = data.filter((elem, index) => {
      return id !== index;
    });
    setData(deletee);
    setCount(count - 1);
  }
  
  return (
    <div>
      <h1>Pending tasks {count}</h1>
      <input value={list} onChange={inputD} type="text"></input>
      <button className="SubBut" onClick={clicked} type="submit">
        Click
      </button>

      <div className="listBox">
        <ul>
          {data.map((x, ind) => {
            return (
              <div className="list">
                <li key={ind}>
                  {x}
                </li>
                <button onClick={() => deleteItem(ind)}>x</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
