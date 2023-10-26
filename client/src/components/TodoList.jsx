export default function TodoList({ 
    todos,
    toggleStatus
 }) {
  return (
    <tbody>
     {todos.map(todo => (
          <tr key={todo.id} className={todo.isCompleted ? "todo is-completed" : "todo"} >
          <td>{todo.text}</td>
          <td>{todo.isCompleted ? "Completed" : "Not completed"}</td>
          <td className="todo-action">
            <button className="btn todo-btn" onClick={() => toggleStatus(todo.id)}>Change status</button>
          </td>
        </tr>
     ))}
    </tbody>
  );
}
