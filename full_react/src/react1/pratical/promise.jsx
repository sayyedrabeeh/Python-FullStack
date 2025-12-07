import React,{useState,useEffect} from "react";

export default function PromiseExample() {

    const [ message,setMessage] = useState('')
    const [error, setError] = useState('')
    
    useEffect(() => {
        
        const mypromise = new Promise((resolve, reject) => {
            const success = false
            

            if (success) {
                resolve('everything is okk')
            } else {
                reject('something went wrong')
            }
        })


        mypromise.then((msg) => setMessage(msg)).catch((err)=> setError(err))


    },[])

return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>Custom Promise Example</h2>
      
      {message && <p style={{ color: "green" }}>Success: {message}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}










