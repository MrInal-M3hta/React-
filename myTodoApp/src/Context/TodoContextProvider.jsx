import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
/*
  ✅ Load from LocalStorage initially
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [
      {
        id: 1,
        text: "Learn React Context API with React Hooks",
        completed: false,
      },
    ];
  });
*/

// ✅ Load from LocalStorage initially with empty array as default to avoid pre-populated todo 
  const [todos, setTodos] = useState(() => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
});

  // ✅ Save to LocalStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Todo
  const addTodo = (text) => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false }
    ]);
  };

  // Toggle Todo
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  };

  // Edit Todo
  const editTodo = (id, text) => {
    if (!text.trim()) return;

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, text }
          : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};