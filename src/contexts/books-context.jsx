import { createContext, useState } from "react";

import { books } from "../db/books";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [updatedBooks, setUpdatedBooks] = useState(books);

  function moveTo(idToChangeCategory, e) {
    setUpdatedBooks(
      updatedBooks.map((book) =>
        book._id === idToChangeCategory
          ? { ...book, category: e.target.value }
          : book
      )
    );
  }

  return (
    <BooksContext.Provider value={{ updatedBooks, moveTo }}>
      {children}
    </BooksContext.Provider>
  );
}
