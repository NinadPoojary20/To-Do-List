import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filterTodo,setFilterTodo] = useState([]);

  useEffect(()=>{
    getLocal();
  },[]);
  
  useEffect(() =>{
    handleFilter();
    saveLocal();
  },[todos, status]);

  const handleFilter = () =>{
    switch (status) {
      case 'completed':
        setFilterTodo(todos.filter(todo => todo.complete === true))
        break;  
      case 'uncompleted':
        setFilterTodo(todos.filter(todo => todo.complete === false))
        break;
      default:
        setFilterTodo(todos)
        break;
    }
  }

  const saveLocal = () =>{
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocal = () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else{
      let val = JSON.parse(localStorage.getItem("todos"))
      setToDos(val);
    }
  }
  return (
    <div className="App">
      <header>
        <h1> ToDo Manager</h1>
      </header>
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setToDos={setToDos}
        setStatus={setStatus}
      />
      <ToDoList 
        todos={todos}
        setToDos={setToDos}
        filterTodo={filterTodo}
      />
    </div>
  );
}

export default App;
