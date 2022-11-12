import { useState } from "react";
import Header from "./component/Header";
import Todos from "./component/Todos";

function App() {
  const onDelete = (item)=>{
    setTodos(todos.filter((e)=>{
      return e!==item
    }))
  }
  const[todos,setTodos]=useState([
    {
      sno:1,
      title:"Going to market",
      desc:"this is my first work to do"
    },
    {
      sno:2,
      title:"Going to mall",
      desc:"this is my Second work to do"
    },
    {
      sno:3,
      title:"Going to Home",
      desc:"this is my Third work to do"
    }
  ]);
  return (
    <div>
      <Header title="My Todos List" />
      <Todos todos={todos} onDelete={onDelete}/>
    </div>
  );
}

export default App;
