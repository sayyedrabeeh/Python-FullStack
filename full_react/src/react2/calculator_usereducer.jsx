
import React,{useReducer} from "react";


function reducer(state,action){
    switch (action.type){
        case 'setnum1':
            return {...state,num1:action.payload}
        case "setnum2":
            return {...state,num2:action.payload}
        case "add":
            return {...state, result : state.num1 + state.num2}
        case 'sub':
            return {...state, result : state.num1 - state.num2}
        case "mul":
            return {...state, result : state.num1 * state.num2}
        case "div":
            return {...state, result : state.num1 / state.num2}
        default:
            return state
    }
}

function Calc(){
    const [state,dispatch] = useReducer(reducer,{num1:0,num2:0,result:0})

    return(
        <>
        <h1>Result : {state.result}</h1>
        <input onChange={(e) => dispatch({type:'setnum1',payload:Number(e.target.value)})}type="number" placeholder="enter 1st number "/>
        <input onChange={(e) => dispatch({type:'setnum2',payload:Number(e.target.value)})}type="number" placeholder="enter 2nd number "/>
        
        <button onClick={() => dispatch({type:'add'}) } >ADD</button>
        <button onClick={() => dispatch({type:'sub'}) } >SUB</button>
        <button onClick={() => dispatch({type:'mul'}) } >MUL</button>
        <button onClick={() => dispatch({type:'div'}) } >DIV</button>
        </>
    )
}

export default Calc

