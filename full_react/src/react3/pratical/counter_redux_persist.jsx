
import React from "react";
import { createSlice,combineReducers,configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer,persistStore} from 'redux-persist'
import { useDispatch, useSelector } from "react-redux";


const counterSlice = createSlice({
    name:'Counter',
    initialState:{
        value:0
    },
    reducers:{
        increment : (state) =>{
            state.value+=1
        },
        decrement: (state) =>{
            state.value-=1
        },
        reset :(state) =>{
            state.value=0
        }
    }
})

const { increment,decrement,reset} = counterSlice.actions

const rootreducer = combineReducers({
    Counter:counterSlice.reducer
})

const persistConfig = {
    key:'root',
    storage
}

const persistedreducer = persistReducer(persistConfig,rootreducer)

const store = configureStore({
    reducer:persistedreducer
})

const persistor = persistStore(store)

function CounterDisplay(){
    const value  =  useSelector((state) => state.Counter.value)
    const dispatch = useDispatch()
    return(
        <>
        <h1>Counter</h1>
        <h2>count:{value}</h2>

        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        
        </>
    )



}
export { persistor,store }
export default CounterDisplay