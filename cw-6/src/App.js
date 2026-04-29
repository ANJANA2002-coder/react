import { useState } from "react";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // Add Book
  const addBook = (book) => {
    const newBook = {
      id: books.length + 1,
      ...book,
    };
    setBooks([...books, newBook]);
  };

  // Delete Book
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Edit Book
  const updateBook = (id, updatedName) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, name: updatedName } : book
      )
    );
  };

  // Filter Books
  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>📚 Book List Management</h1>

      <BookForm addBook={addBook} />
      <SearchBar search={search} setSearch={setSearch} />
      <BookTable
        books={filteredBooks}
        deleteBook={deleteBook}
        updateBook={updateBook}
      />
    </div>
  );
}

export default App;