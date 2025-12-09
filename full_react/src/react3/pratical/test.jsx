import React, { useState, useEffect } from "react";
import { useSelector,useDispatch,Provider } from "react-redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0,num:5 },
    reducers:
    {
        inc: (state) => {
            state.count+=1
        },
        dec: (state) => {
            state.count-=1
        },
        reset: (state) => {
            state.count = 0 
        }
    }
})

const { inc,dec,reset } = counterSlice.actions

const store = configureStore({
    reducer: {
      counter:  counterSlice.reducer
    }
})

export { store }

function Display() {

    const  {num,count}  = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <>
            <h1>num : { num }</h1>
            <h1>Count : { count }</h1>
            <button onClick={()=> dispatch(inc())}>increment</button>
            <button onClick={()=> dispatch(dec())}>decrement</button>
            <button onClick={()=> dispatch(reset())}>reset</button>
            
        </>
    )

    
}

export default function App() {
    return (
        <Provider store={store}>
            <Display/>
        </Provider>
    )
}