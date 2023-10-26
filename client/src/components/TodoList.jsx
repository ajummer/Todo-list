import Todo from "./Todo.jsx";

export default function TodoList({ 
    todos,
    toggleStatus
 }) {
  return (
    <tbody>
     {todos.map(todo => <Todo key={todo.id} {...todo} toggleStatus={toggleStatus}/>)}
    </tbody>
  );
}
