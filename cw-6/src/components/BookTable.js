import BookRow from "./BookRow";

function BookTable({ books, deleteBook, updateBook }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Publish Date</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {books.length === 0 ? (
          <tr>
            <td colSpan="5">No books found</td>
          </tr>
        ) : (
          books.map((book) => (
            <BookRow
              key={book.id}
              book={book}
              deleteBook={deleteBook}
              updateBook={updateBook}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default BookTable;