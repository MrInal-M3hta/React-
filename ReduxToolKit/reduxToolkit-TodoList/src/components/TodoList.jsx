import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../Features/Todo/TodoSlice";
import { useState } from "react";

function TodoList() {
  const todos = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const [deleteId, setDeleteId] = useState(null);

  return (
    <>
      <ul className="list-none max-w-3xl m-auto" >
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {/* <div className="text-white">{todo.text}</div>  Without toggle Checkbox just rendring text. We will add toggle functionality below. */}

            {/* Toggle Checkbox */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="mr-3"
            />

            {/* Todo Text */}
            <div
              className={`text-white flex-1 ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </div>

            {/* Delete Button */}
            <button
              onClick={() => {
                setDeleteId(todo.id);
                setIsDeleteModalOpen(true);
              }}
              className="text-white bg-red-500 px-2 py-1 rounded"
            >
              Delete
            </button>

            {/* Edit Button */}
            <button
              onClick={() => {
                setEditingId(todo.id);
                setEditText(todo.text);
                setIsEditModalOpen(true);
              }}
              className="text-white bg-blue-500 px-2 py-1 rounded ml-2"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      {/* ================= EDIT MODAL ================= */}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Edit Todo</h2>

            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="border w-full px-2 py-1 mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  dispatch(editTodo({ id: editingId, text: editText }));
                  setIsEditModalOpen(false);
                }}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-gray-400 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= DELETE MODAL ================= */}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">
              Are you sure you want to delete?
            </h2>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  dispatch(deleteTodo(deleteId));
                  setIsDeleteModalOpen(false);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-400 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoList;

/*
  🔍 How the Edit Popup Works::

  Step 1 — User clicks Edit ->

    setEditingId(todo.id);
    setEditText(todo.text);
    setIsEditModalOpen(true);

  State becomes::
    editingId = "abc123"
    editText = "Learn React"
    isEditModalOpen = true

  Step 2 — Modal Appears ->

  React condition:
    {isEditModalOpen && <Modal />}
  
  Since it’s true, React renders the popup.

  Step 3 — User edits text ->
    onChange={(e) => setEditText(e.target.value)}
  Example typing:
    editText = "Learn React and Redux"

  Step 4 — User clicks Save ->
    dispatch(editTodo({ id: editingId, text: editText }));
  Then:
    setIsEditModalOpen(false);
  Modal disappears.

  Dispatch sends:
    { id: "abc123", text: "Learn React and Redux" }

  Modal closes:
    isEditModalOpen = false
*/
