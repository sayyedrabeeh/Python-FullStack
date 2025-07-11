import React,{useState} from "react";


function  useCaseToggle(initialtext=''){
    const [text,setText] = useState(initialtext)

    const togglecase = () =>{
        const toggled = text.split('').map(char => char === char.toUpperCase() ? char.toLowerCase():char.toUpperCase()).join('')
        setText(toggled)

    }
   return {text,setText,togglecase }
}

function Upper(){

    const {text,setText,togglecase} = useCaseToggle()

    return(
        <>
        <h1>{text}</h1>

        <input onChange={(e) => setText(e.target.value)} placeholder="write anythig" />
        <button onClick={togglecase}>change</button>


        </>
    )
}

export default Upper
