import React, { useState, useEffect } from "react";
import "./AddBook.css";
import { toast } from "react-toastify";

const AddBook = ({
  books,
  setBooks,
  currentBook,
  isEditing,
  handleUpdate,
  setIsEditing,
}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing && currentBook) {
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
      setGenre(currentBook.genre);
    }
  }, [isEditing, currentBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !genre) {
     toast.error("Please fill in all fields")
      return;
    }

    let updatedBooks;
    if (isEditing) {
      const updatedBook = { ...currentBook, title, author, genre };
      updatedBooks = books.map((book, index) =>
        index === currentBook.index ? updatedBook : book
      );
      handleUpdate(updatedBook);
    } else {
      const newBook = { title, author, genre };
      updatedBooks = [...books, newBook];
      setBooks(updatedBooks);
      toast.success("Book added Successfully")
      localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    setTitle("");
    setAuthor("");
    setGenre("");
    setError("");
    setIsEditing(false);
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? "Edit Book" : "Add a New Book"}</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          placeholder="Enter author's name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          id="genre"
          placeholder="Enter genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <button type="submit">{isEditing ? "Update Book" : "Add Book"}</button>
    </form>
  );
};

export default AddBook;
