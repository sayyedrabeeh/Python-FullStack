import React,{createContext,useContext, useState} from "react";

const AddContext = createContext()

function AddProvider({children}){
    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)

    const result = Number(num1) + Number(num2)

    return(
        <AddContext.Provider value={{num1,num2,setNum1,setNum2,result}}>
            {children}
        </AddContext.Provider>
    )

}

function Diplay(){
    const { setNum1,setNum2,result} = useContext(AddContext)

    return(
        <>
        
        <h1>{result}</h1>
        <input   onChange={(e) => setNum1(e.target.value)} placeholder="ente your 1st number "/>
        <input   onChange={(e) => setNum2(e.target.value)} placeholder="ente your 2nd number "/>
        </>
    )

}

function Add(){
    return(
        <AddProvider>
            <Diplay/>
        </AddProvider>
    )
}
export default Add
