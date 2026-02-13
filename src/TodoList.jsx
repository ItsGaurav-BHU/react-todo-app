import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, { id: uuidv4(), text: input }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Todo App</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Add your new todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length > 0 && (
          <div className="footer">
            <p>You have {todos.length} pending tasks</p>
            <button onClick={clearAll}>Clear All</button>
          </div>
        )}
      </div>
    </div>
  );
}
