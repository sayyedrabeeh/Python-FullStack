import React,{createContext,useContext,useState} from "react";


const calcContext = createContext()

function CalcProvider({children}){
    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [result,setResult] = useState(0)


    const add = () => setResult(num1 + num2)
    const sub = () => setResult(num1 - num2)
    const mul = () => setResult(num1 * num2)
    const div = () => setResult( num1 / num2)

    return(
        <calcContext.Provider value={{num1,num2,result,setNum1,setNum2,add,sub,mul,div}}>
            {children}
        </calcContext.Provider>
    )
}

function Input_output(){
    const { setNum1,setNum2,result } = useContext(calcContext)

    return(
        <>
        <h1>calculator</h1>
        <h2>Result :{result}</h2>
        <input onChange={(e) => setNum1(Number(e.target.value))} type="number" placeholder="enter 1st number"/>
        <input onChange={(e) => setNum2(Number(e.target.value))} type="number" placeholder="enter 2nd number"/>

        </>
    )
}

function Buttons(){
    const { add,sub,mul,div } = useContext(calcContext)

    return(
        <>
        <button onClick={add} >ADD</button>
        <button onClick={sub} >SUB</button>
        <button onClick={mul} >MUL</button>
        <button onClick={div} >DIV</button>
        </>
    )

}

function Calc(){

    return(
        <CalcProvider>
            <Input_output/>
            <Buttons/>
        </CalcProvider>
    )

}

export default Calc