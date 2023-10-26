export default function Todo({
    text,
    isCompleted,
    id,
    toggleStatus
}) {
    return (
        <tr  className={isCompleted ? "todo is-completed" : "todo"} >
        <td>{text}</td>
        <td>{isCompleted ? "Completed" : "Not completed"}</td>
        <td className="todo-action">
          <button className="btn todo-btn" onClick={() => toggleStatus(id)}>Change status</button>
        </td>
      </tr>
    )
}