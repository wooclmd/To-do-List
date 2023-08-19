import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo" key={todo.id}>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        o
      </button>
      <button className="trash-btn" onClick={() => deleteHandler(todo.id)}>
        x
      </button>
    </div>
  );
};

export default Todo;
