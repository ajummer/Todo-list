export default function TodoList({ todos }) {
  return (
    <tbody>
     {todos.map(todo => (
          <tr className={todo.isCompleted ? "todo is-completed" : "todo"}>
          <td>{todo.text}</td>
          <td>{todo.isCompleted ? "Completed" : "Not completed"}</td>
          <td className="todo-action">
            <button className="btn todo-btn">Change status</button>
          </td>
        </tr>
     ))}
    </tbody>
  );
}
