import React,{useEffect} from "react";


function Useeffect1(){

    useEffect(()=>{
        alert('you are on useffect1  component')


       return(()=>{
        alert('unmoted')
       })

    },[])

    return(
        <>
        <h1>hello how are you </h1>
        </>
    )

}

export default Useeffect1