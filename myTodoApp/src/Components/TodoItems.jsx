import React from "react";
import { useContext } from "react";
import { TodoContext } from "../Context/TodoContextProvider";

function TodoItem({ todo }) {
  
    const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);

    const [todoMsg, setTodoMsg] = React.useState(todo.text);
    const [isTodoEditable, setIsTodoEditable] = React.useState(false);
    
    const toggleCompleted = () => {
        toggleTodo(todo.id);
    }

    // const updateTodo = () => {
    //     editTodo(todo.id, {...todo, text: todoMsg});
    //     setIsTodoEditable(false);
    // }
/*
    You are sending an object as the second argument. But your editTodo function expects just the text. So, you should change the editTodo function to accept the id and the new text, and then update the todo item accordingly.

    Here's how you can modify the editTodo function in your TodoContextProvider:

    const editTodo = (id, text) => {
        if (!text.trim()) return;

        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, text } // Update only the text of the matched todo
                    : todo
            )
        );
    };

    Then, in your TodoItem component, you can call this function like this:

     const updateTodo = () => {
        editTodo(todo.id, todoMsg); // Pass the id and the new text
        setIsTodoEditable(false);
     };

     This way, the editTodo function will correctly update the text of the specified todo item without affecting other properties.
*/
    const updateTodo = () => {
    editTodo(todo.id, todoMsg);
    setIsTodoEditable(false);
    };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            updateTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
