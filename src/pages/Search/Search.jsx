import { useContext, useState } from "react";

import { BooksContext } from "../../contexts/books-context";
import { BookCard } from "../../components/BookCard/BookCard";
import "./search.css"

export function Search() {
  const { updatedBooks } = useContext(BooksContext);
  const [inputText, setInputText] = useState("");

  function handleInput(e) {
    setInputText(e.target.value);
  }

  const searchedBooks = inputText.length
    ? updatedBooks.filter(({ name }) =>
        name.toLowerCase().includes(inputText.toLowerCase())
      )
    : updatedBooks;

  return (
    <div>
      <input
        type="text"
        placeholder="search books"
        onChange={handleInput}
        className="input_text"
      />
      <div className="search_books_container">
        {searchedBooks.map((book) => (
          <BookCard {...book} key={book._id}/>
        ))}
      </div>
    </div>
  );
}
