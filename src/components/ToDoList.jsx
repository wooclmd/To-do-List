import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  // another way
  // const deleteHandler = (id) => {
  //   const updateTodo = todos.filter((todo) => todo.id !== id);
  //   setTodos(updateTodo);
  // };
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} key={todo.id} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
