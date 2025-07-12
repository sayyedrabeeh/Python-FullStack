
import React,{ useState,useReducer, useContext } from "react";

function reducer(state,action){
    switch(action.type){
        case "addTodo":
            return {...state,todos:[...state.todos,{ text:action.payload,id:Date.now(),completed:false}] }
            
        case "delete":
             return {...state ,todos:state.todos.filter((t) => t.id != action.payload) }
        
        case "toggle":
            return {...state,todos:state.todos.map((todo) =>
                todo.id === action.payload ? {...todo,completed:!todo.completed}: todo
             )}
            
        case "edit":
            return{...state,todos:state.todos.map((todo) => todo.id === action.payload.id ?{...todo,text:action.payload.newtext} : todo )}
    }

}
const initialState = {
    todos:[],
    completed : false

}

function Todo(){
    const [state,dispatch] = useReducer(reducer,initialState)
    const [text,setText] = useState('')
    const [editid,setEditid] = useState(null)
    const [editText,setEdittext] = useState('')

    const addtodo = () =>{
        dispatch({type:"addTodo" ,payload:text})
        setText('')
    }
    const edit = (todo) =>{
        setEditid(todo.id)
        setEdittext(todo.text)

    }
    const save = (id) =>{
        dispatch({type: "edit",payload:{id,newtext:editText}})
        setEditid(null)
        setEdittext('')
    }
    return(
        <>
        <h2>Todo List with usereducer</h2>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder=" enter something"/>
        <button onClick={addtodo}>ADD</button>
        
        {state.todos.map((item) =>(
            <li key={item.id}>
               
                { editid !== item.id ?(<>
                 <span style={{textDecoration: item.completed ? "line-through" : "none"}}>
                {item.text}
                </span>
                <button onClick={() => dispatch({type:'toggle',payload:item.id})}>Done</button>
                <button onClick={() => edit(item)}>Edit</button>
                <button onClick={() => dispatch({type:'delete',payload:item.id})}>Delete</button>
                </>)
                :
                (
                    <>
                    <input value={editText} onChange={(e) => setEdittext(e.target.value)}/>
                    <button onClick={() => save(item.id)}>save</button>
                    </>
                )}
            </li>
        ) )}


        </>
    )
}

export default Todo