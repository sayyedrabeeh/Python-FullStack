import React,{useState} from "react"
import { createSlice, configureStore } from "@reduxjs/toolkit"
import { useSelector,useDispatch,Provider } from "react-redux"


const CounterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value+=1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        }
    }
    
})

const { increment, decrement, reset } = CounterSlice.actions

const store = configureStore({
    reducer: {
        'counter': CounterSlice.reducer
    }
})
export { store }


function Calc() {
    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
   
    return (
        <>
            <h1>count :{value}</h1>
            <button onClick = {() => dispatch(increment())}>inc</button>
            <button onClick = {() => dispatch(decrement())}>dec</button>
            <button onClick = {() => dispatch(reset())}>reset</button>
            
        </>
    )
 

}

export default function App() {

    return (
        <Provider store={ store }>
            <Calc/>
        </Provider>
    )
    
} 