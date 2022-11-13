import { useState ,useEffect} from "react";
import AddTodo from "./component/AddTodo";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Todos from "./component/Todos";

function App() {
  let initTodo
  if(localStorage.getItem("todos")===null){
    initTodo=[]
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (item) => {
    setTodos(todos.filter((e) => {
      return (e !== item)
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
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
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
    <div>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
