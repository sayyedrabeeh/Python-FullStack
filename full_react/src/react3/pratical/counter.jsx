import React,{useState} from 'react'
import { createSlice,configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import { useSelector,useDispatch } from  'react-redux'

const CounterSlice =  createSlice({
  name:'countr',
  initialState:{ value : 0},
  reducers:{
    increment:(state) =>{
      state.value+=1
    },
    decrement:(state) =>{
      state.value-=1
    },
    reset:(state) =>{
      state.value = 0
    }
  }
  })
const { increment,decrement,reset } = CounterSlice.actions

const store = configureStore({
  reducer:{
    countr:CounterSlice.reducer
  }
}) 

export {store}

function Counter(){
  const count = useSelector((state) => state.countr.value)
  const dispatch = useDispatch()
  
  return(
    <>
      <h1>Counter:{count}</h1>
      <button onClick ={()=>dispatch(increment())} >PLUS</button>
      <button onClick ={()=>dispatch(decrement())} >MINUS</button>
      <button onClick ={()=>dispatch(reset())} >REST</button>
      
    </>)
  
  
}

export default  function App(){
  return(
  <Provider store ={store}>
    <Counter/>
  </Provider>
  )
}
 







