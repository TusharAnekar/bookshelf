import { useContext } from "react";
import { BooksContext } from "../../contexts/books-context";

export function BookCard({ _id, img, name, author, category }) {
  const { moveTo } = useContext(BooksContext);

  return (
    <div key={_id} className="book_container">
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>{author}</p>
      <p>{category}</p>
      <select name="" id="" onChange={(e) => moveTo(_id, e)}>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to Read">Want to Read</option>
        <option value="Read">Read</option>
        <option value="None">None</option>
      </select>
    </div>
  );
}