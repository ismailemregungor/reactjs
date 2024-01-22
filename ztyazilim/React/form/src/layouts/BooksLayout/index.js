import BooksForm from "./form";
import BooksTable from "./table";

import "./index.scss";

const BooksLayout = ({ books, onSubmit }) => {
  return (
    <div className="booksLayout">
      <BooksForm onSubmit={onSubmit} />
      <BooksTable books={books} />
    </div>
  );
};

export default BooksLayout;
