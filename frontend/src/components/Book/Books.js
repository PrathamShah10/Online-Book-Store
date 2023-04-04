import React, { useEffect, useState } from "react";
import "./Book.css";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || []
    );
  // useEffect(() => {
  //   fetchHandler().then((data) => setBooks(data.books));
  // }, []);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
