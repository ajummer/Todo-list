import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TodoList from "./components/todoList.jsx";
import Spinner from "./components/Spinner.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos").then((response) =>
      response.json().then((data) => {
        const result = Object.keys(data).map((id) => ({
          id: id - 1,
          ...data[id],
        }));
        setTodos(result);
        setIsLoading(false);
      })
    );
  }, []);

  const onChange = (event) => {
    setInputText(event.target.value);
  };

  const onDelete = (id) => {
    setTodos((oldTodos) => oldTodos.filter((x) => x.id != id));
  };

  const addNewTodo = () => {
    const lastId = Number(todos[todos.length - 1]?.id);

    if (isNaN(lastId)) {
      setTodos((oldTodos) => [
        ...oldTodos,
        { id: 0, text: inputText, isCompleted: false },
      ]);
    } else {
      setTodos((oldTodos) => [
        ...oldTodos,
        { id: lastId + 1, text: inputText, isCompleted: false },
      ]);
    }
  };

  const toggleStatus = (id) => {
    setTodos((state) =>
      state.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <Header />

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>
          <div className="add-btn-container">
            <label htmlFor="NewToDo">Add new Todo :</label>
            <input type="text" onChange={onChange} value={inputText}></input>
            <button className="btn" onClick={addNewTodo}>
              + Add new Todo
            </button>
          </div>

          <div className="table-wrapper">
            {isLoading ? (
              <Spinner />
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                  </tr>
                </thead>
                <TodoList
                  todos={todos}
                  toggleStatus={toggleStatus}
                  onDelete={onDelete}
                />
              </table>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
