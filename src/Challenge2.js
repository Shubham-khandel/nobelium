export function Heading(prop) {
  return <p>{prop.hText}</p>;
}

export function Input() {
    
  return (
    <div>
      <input className="inpp" placeholder="mobile.."></input>
      <br></br>
      <input placeholder="password.." type={"password"}></input>
    </div>
  );
}

export function Btn(prop2) {
  return (
    <div>
      <br></br>
      <button type="submit">{prop2.bText}</button>
    </div>
  );
}
