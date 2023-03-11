import {useState} from 'react'

export function IncDec(){

  const [data,setData] = useState(0);

  function HandleInc(){
    setData(data+1)
  }
  
  function HandleDnc(){
    if(data>0)
    setData(data-1)
  }

  return(
    <>
    <h1 style={{color:"red"}}>{data}</h1>
    <button style={{margin:"10px"}} onClick = {HandleInc}>Increment</button>
    <button onClick = {HandleDnc} >Decrement</button>

    </>
  )
}