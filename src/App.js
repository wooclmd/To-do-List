import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Get old todo list from localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="App" style={{ textAlign: "center", padding: "10px" }}>
      <h1>To Do List</h1>
      <Form
        setInput={setInput}
        input={input}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
