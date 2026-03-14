const [isModalOpen, setIsModalOpen] = useState(false);
const [editText, setEditText] = useState("");
const [editingId, setEditingId] = useState(null);

<button
  onClick={() => {
    setIsModalOpen(true);
    setEditText(todo.text);   // load previous text
    setEditingId(todo.id);
  }}
>
  Edit
</button>


{isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50">
    
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="mb-4">Edit Todo</h2>

      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <div className="flex gap-2">
        <button
          onClick={() => {
            dispatch(editTodo({ id: editingId, text: editText }));
            setIsModalOpen(false);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>

        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>

  </div>
)}