import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./component/AddTodo";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Todos from "./component/Todos";
import About from "./component/About";


function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (item) => {
    setTodos(todos.filter((e) => {
      return (e !== item)
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    // console.log(title,desc);
    let sno;
    if (todos.length === 0) {
      sno = 1
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    // console.log(myTodo); 
    setTodos([...todos, myTodo]);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <Header title="My Todos List" />
      <Routes>
        <Route exact path="/" element={
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>
          }
        />
        <Route exact path="/About" element={<About/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
