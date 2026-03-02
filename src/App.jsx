import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task) return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Todo App</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTask(index)}
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;