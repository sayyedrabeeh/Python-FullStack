import React from "react";
import {createSlice,configureStore  } from '@reduxjs/toolkit'
import { useDispatch,useSelector } from 'react-redux'

const counterSlice = createSlice({
    name:'Counter',
    initialState:{
        count:0
    },
    reducers:{
        incremet:(state) =>{
            state.count+=1
        },
        decrement:(state) =>{
            state.count-=1
        },
        reset :(state) =>{
            state.count = 0 
        }
    }
})
const { incremet,decrement,reset} = counterSlice.actions

const  store = configureStore({
    reducer:{
    Counter : counterSlice.reducer
}})
 
export {store}

function Display(){
    const  count  = useSelector((state) => state.Counter.count)
    const dispatch = useDispatch()

    return(
        <>
        <h2>count:{count}</h2>

        <button onClick={()=>dispatch(incremet())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={() =>dispatch(reset())}>reset</button>
        
        </>
    )

}


export default Display



