import React from "react";
import "./Book.css";

const Book = ({ book, index, books, setBooks, handleEdit, handleDelete }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <div className="actions">
        <button onClick={() => handleEdit(index)}>Edit</button>
        <button className="delete" onClick={() => handleDelete(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;
