import React from "react";
import {createSlice,configureStore } from '@reduxjs/toolkit'
import { useDispatch,useSelector} from 'react-redux'
import Calc from "../../react2/calculator_usecontext";


const calcSlice = createSlice({
    name:'Calc',
    initialState:{
        result:0,
        num1:0,
        num2:0
    },
    reducers:{
        add:(state) =>{
            state.result = state.num1 +state.num2
        },
        sub:(state) =>{
            state.result = state.num1 -state.num2
        },
        mul:(state) =>{
            state.result = state.num1 * state.num2
        },
        div:(state) =>{
            state.result = state.num2 !== 0 ? state.num1 / state.num2 :'error'
        },
        setnum1:(state,action) =>{
            state.num1 = action.payload
        },
        setnum2:(state,action) =>{
            state.num2 = action.payload
        }
    }
})

const {setnum1,setnum2,add,sub,mul,div} = calcSlice.actions

const store = configureStore({
    reducer:{
        Calc:calcSlice.reducer
    }
})

export {store}

function Calculator(){
    const result = useSelector((state) => state.Calc.result)
    const dispatch = useDispatch()
    return(
        <>
        <h1>Calculator</h1>
        <h2>result : { result }</h2>

        <input onChange={(e) =>dispatch(setnum1(Number(e.target.value)))} type="number" placeholder="enter number 1"/>
        <input onChange={(e) =>dispatch(setnum2(Number(e.target.value)))} type="number" placeholder="enter number 2"/>

        <button onClick={() =>dispatch(add())}>ADD</button>
        <button onClick={() =>dispatch(sub())}>SUB</button>
        <button onClick={() =>dispatch(mul())}>MUL</button>
        <button onClick={() =>dispatch(div())}>DIV</button>
        </>
    )
}

export default Calculator;