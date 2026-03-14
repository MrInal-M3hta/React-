import React from "react";
import { useContext } from "react";
import { TodoContext } from "../Context/TodoContextProvider";

function TodoForm() {
    const [text, setText] = React.useState("");

    const { addTodo } = useContext(TodoContext);
    

    const addTodoText = (event) => {
        event.preventDefault();
        if (text.trim() === "") return;
        addTodo(text);
        setText("");
    }
  return (
    <form className="flex" onSubmit={addTodoText}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
