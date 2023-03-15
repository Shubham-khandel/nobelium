import { useState } from "react";

export function Counter(){
    const[data, setData] = useState()
    const[count, setCount] = useState(0)

    function characCount(e){
       if(e.target.value.length <= 100){
        setData(e.target.value)
        setCount(count+1)
       }
    }

    return(
        <div>
            <h1>{count}</h1>
            <textarea value={data} type="text" onChange={characCount}></textarea>
        </div>
    )
}