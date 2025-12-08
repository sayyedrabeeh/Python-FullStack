
import React, { useState } from "react";

function Child({onsend}){
    const [inputvalue,setInputValue] = useState('')

    const sendparent = ()=>{
        onsend(inputvalue)
        setInputValue('')
    }
    return(
        <>
        <input value={inputvalue} onChange={(e) => setInputValue(e.target.value)} placeholder="write your thing "/>
        <button onClick={sendparent}>send to parent</button>
        </>
    )


}


function Parent(){
    const [data,setData] = useState('')

    return(
        <>
         <h1>Data From Child : {data}</h1>
         <Child onsend={(data) =>setData(data)}/>

        </>
    )
}

export default Parent