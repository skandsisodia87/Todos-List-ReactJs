import React from 'react'

export default function TodoItems({item,onDelete}) {
  return (
    <div className='container my-3'>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(item)}}>Delete</button>
    </div>
  )
}
