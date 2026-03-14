import AddTodo from "./components/AddTodo";
import Todolist from "./components/TodoList";

function App() {
  return (
    <>
    <h1 className="text-center text-4xl mb-3">Todo List with Redux Toolkit</h1>
      <AddTodo />
      <Todolist />
    </>
  );
}

export default App;
