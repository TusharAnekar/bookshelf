import { categories } from "../../db/categories";

import "./home.css";
import { useContext } from "react";
import { BookCard } from "../../components/BookCard/BookCard";
import { BooksContext } from "../../contexts/books-context";

export function Home() {
  
  const {updatedBooks} = useContext(BooksContext)

  return (
    <div className="home_container">
      {categories.map(({ _id, categoryName }) => (
        <div key={_id} className="category_container">
          <h2>{categoryName}</h2>
          <div className="books_container">
            {updatedBooks
              .filter(({ category }) => category === categoryName)
              .map((book) => (
                <BookCard {...book} key={book._id}/>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
