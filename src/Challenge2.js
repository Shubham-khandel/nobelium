export function Heading() {
  return <p>Register here ...</p>;
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

export function Btn() {
  return (
    <div>
      <br></br>
      <button type="submit">Submit</button>
    </div>
  );
}
