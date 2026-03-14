import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/TodoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoText = (event) => {
    event.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
    else {      
      alert("Please enter a todo item.");
    }
  };
  return (
    <>
      <form className="flex w-96 m-auto" onSubmit={addTodoText} >
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodo;
