import React from 'react'
import TodoItems from "./TodoItems"

export default function Todos(props) {
    return (
        <div className='container'>
            <h3 className='text-center my-3'>Todos</h3>
            {props.todos.length!==0?
            props.todos.map((todo)=>{
                return <TodoItems item={todo} key={todo.sno} onDelete={props.onDelete}/>
            }):"Naathing Todo"}
        </div>
    )
}
