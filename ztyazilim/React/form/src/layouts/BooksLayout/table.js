import Button from "../../components/Button";

const BooksTable = ({ books, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Date</th>
          <th>Page Count</th>
          <th>Price</th>
          <th>Gender</th>
          <th>Publisher</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.date}</td>
            <td>{book.pageCount}</td>
            <td>{book.price}</td>
            <td>{book.gender}</td>
            <td>{book.publisher}</td>
            <td>
              <Button onClick={() => onDelete(book.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
