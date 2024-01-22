import { useEffect, useState } from "react";
import BooksLayout from "../../layouts/BooksLayout";
import { addBook, getBooks } from "../../services/book";

const Books = () => {
  const [books, setBooks] = useState([]);

  const onSubmit = (data) => {
    addBook(data).then((response) => {
      setBooks((prevState) => [...prevState, response]);
    });
  };

  useEffect(() => {
    getBooks().then((response) => {
      setBooks(response);
    });
  }, []);

  return <BooksLayout books={books} onSubmit={onSubmit} />;
};

export default Books;
