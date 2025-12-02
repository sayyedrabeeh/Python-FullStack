import React,{useState} from "react"
import { createSlice, configureStore } from "@reduxjs/toolkit"
import { useSelector, useDispatch } from "react-redux"
import { Provider } from "react-redux"
const CounterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -=1
        },
        reset: (state) => {
            state.count = 0 
        }
    }
})
const { increment, decrement, reset } = CounterSlice.actions
const store = configureStore({
    reducer: {
        counter: CounterSlice.reducer
    }
})
export { store }
function Counter_redux() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <>
            <h1> Count : {count}</h1>
            <button onClick={()=> dispatch(increment())} >increment</button>
            <button onClick={()=> dispatch(decrement())} >decrement</button>
            <button onClick={()=> dispatch(reset())} >reset</button>

        </>

    )

}
export default function App() {
    
    return (
        <Provider store={store}>
            <Counter_redux/>
        </Provider>
    )
}




