import React from "react";



function Child({message}){

    return(
    <>
    <h1> child component</h1>
    <p> message from parent : {message}</p>
    </>
    
)
}


function Parent(){
     
    const  message = 'this is message from parent '

    return(
        <>
        <h1>Parent Conponent</h1>
        <Child message={message}/>
        </>
    )

}
export default  Parent