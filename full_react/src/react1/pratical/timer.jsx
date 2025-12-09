import React,{useState,useEffect} from 'react'

export default function Timer(){
    const [sec,setSec] = useState(0)
    const [isrunning,setIsrunning] = useState(false)

    useEffect(()=>{

        let interval;
        if (isrunning  ){
            if (sec >0){
            interval = setInterval(()=>{
                setSec(
                    prev => (prev > 0 ? prev-1 : 0)
                )
            },1000)
        }else{
                setIsrunning(prev => !prev)
        } 
        }
        return () => clearInterval(interval)
    },[isrunning,sec])

    return(
        <>
        <h1>Count : { sec } </h1>
            { !isrunning && 
            <input onChange = {(e)=>setSec(e.target.value)} vlaue={sec} placeholder ='set the limit'/>
            }
        <button onClick={()=>setIsrunning(prev => !prev)} >{ isrunning ? 'Stop' : 'start' }</button>
        </>
    )
    
}
