
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <body>
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
              <tbody>
                <tr className="todo is-completed">
                  <td>Give dog a bath</td>
                  <td>Complete</td>
                  <td className="todo-action">
                    <button className="btn todo-btn">Change status</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default App;
