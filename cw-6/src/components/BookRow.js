import { useState } from "react";

function BookRow({ book, deleteBook, updateBook }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(book.name);

  const handleSave = () => {
    if (!newName.trim()) return alert("Book name cannot be empty!");
    updateBook(book.id, newName);
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{book.id}</td>

      <td>
        {isEditing ? (
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        ) : (
          book.name
        )}
      </td>

      <td>{book.author}</td>
      <td>{book.date}</td>

      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
}

export default BookRow;