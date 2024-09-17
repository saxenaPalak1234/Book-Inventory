// import React from "react";
// import "./BookList.css";
// import Book from "../Book/Book";

// const BookList = ({ books, setBooks, handleEdit, handleDelete }) => {
//   return (
//     <div className="book-list">
//       {books.length > 0 ? (
//         books.map((book, index) => (
//           <Book
//             key={index}
//             book={book}
//             index={index}
//             books={books}
//             setBooks={setBooks}
//             handleEdit={handleEdit}
//             handleDelete={handleDelete}
//           />
//         ))
//       ) : (
//         <p className="no-books-message">No books available. Please add some.</p>
//       )}
//     </div>
//   );
// };

// export default BookList;


import React, { useState } from 'react';
import './BookList.css';
import Book from '../Book/Book';

const BookList = ({ books, setBooks, handleEdit, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="book-list">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="book-list">
        {books.length > 0 ? (
          books.map((book, index) => (
            <Book
              key={index}
              book={book}
              index={index}
              books={books}
              setBooks={setBooks}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <p className="no-books-message">No books available. Please add some.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;

