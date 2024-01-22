import Button from "../../components/Button";

const BooksForm = ({ onSubmit }) => {
  const onSubmitForm = (e) => {
    e.preventDefault();

    const newBook = {
      name: e.target.name.value,
      author: e.target.author.value,
      date: e.target.date.value,
      pageCount: e.target.pageCount.value,
      price: e.target.price.value,
      gender: e.target.gender.value,
      publisher: e.target.publisher.value,
    };

    onSubmit(newBook);
    e.target.reset();
  };

  return (
    <form className="booksForm" onSubmit={onSubmitForm}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Author:
        <input type="text" name="author" required />
      </label>
      <label>
        Release date:
        <input type="date" name="date" required />
      </label>
      <label>
        Page count:
        <input type="number" name="pageCount" required />
      </label>
      <label>
        Price:
        <input type="number" name="price" required />
      </label>
      <label>
        Gender:
        <select name="gender" required>
          <option value="action">Action</option>
          <option value="dystopian">Dystopian</option>
          <option value="novel">Novel</option>
        </select>
      </label>
      <label>
        Publisher:
        <input type="text" name="publisher" required />
      </label>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default BooksForm;
