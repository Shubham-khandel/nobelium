import { useState } from "react";


export function ChangeName() {
  const [name, setName] = useState('Amit')

  function update() {
    setName(name === 'Amit' ? 'Ranjan' : 'Amit' )
  }

  return (
    <div>
      <h1>My name is {name}!</h1>
      <button onClick={update} >Change Name</button>
    </div>
  );
}