import React from "react";

const Form = ({ setInput, input, todos, setTodos, setStatus }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          value={input}
          type="text"
          className="todo-input"
          onChange={inputHandler}
        />
        <button className="todo-button" type="submit" onClick={submitHandler}>
          +
        </button>

        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
