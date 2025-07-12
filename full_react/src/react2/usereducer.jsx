import React,{useReducer} from "react";

function reducer(state,action){
    switch (action.type){
        case "setnum1":
            return {...state,num1:action.payload}
        case "setnum2":
            return {...state,num2:action.payload}
        default:
            return state
    }
}

function Add(){
    const [state,dispatch] = useReducer(reducer,{num1:0,num2:0})
    const result = Number(state.num1) + Number(state.num2)
    return(<>
        <h1>Result:{result}</h1>
        <input type="number" onChange={(e) => dispatch({type:'setnum1',payload:e.target.value})} placeholder="enter your 1st number"/>
        <input type="number" onChange={(e) => dispatch({type:'setnum2',payload:e.target.value})} placeholder="enter your 2nd number"/>
    </>)

}

export default Add