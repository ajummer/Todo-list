import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TodoList from "./components/todoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos").then((response) =>
      response.json().then((data) => {
        const result = Object.keys(data).map((id) => ({ id, ...data[id] }));
        setTodos(result);
      })
    );
  }, []);
 
  const toggleStatus = (id) => {
    setTodos(state => state.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
  };

  return (
    <div>
      <Header />

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>
          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th className="table-header-task">Task</th>
                  <th className="table-header-status">Status</th>
                  <th className="table-header-action">Action</th>
                </tr>
              </thead>
              <TodoList todos={todos} toggleStatus={toggleStatus} />
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
