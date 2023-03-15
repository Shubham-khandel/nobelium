import { useState } from "react";

export function ImageChange() {
  const [data, setData] = useState("https://picsum.photos/1000/1000");
  
  const random = Math.floor((Math.random() * 1000)+500);

  function update() {
    setData(`https://picsum.photos/1000/${random}`);
  }

  return (
    <div className="Container">
      <div className="Box">
        <div className="Imagediv">
          <img src={data}></img>
        </div>
        <div className="Button">
          <button className="Btn" type="submit" onClick={update}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
}
