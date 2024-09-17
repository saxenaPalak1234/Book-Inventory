import React, { useState } from 'react';
import './BookList.css';
import Book from '../Book/Book';

const BookList = ({ books, setBooks, handleEdit, onSearch, handleDelete }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearching(true);
    onSearch(e.target.value);
  };


  const displayBooks = isSearching ? (books.length > 0 ? books : [{ id: 'no-matching', title: 'No matching books' }]) : books;

  return (
    <div className="book-list-container">
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
        {displayBooks.length > 0 ? (
          displayBooks.map((book, index) => (
            book.id !== 'no-matching' ? (
              <Book
                key={index}
                book={book}
                index={index}
                books={books}
                setBooks={setBooks}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ) : (
              <p className="no-books-message" key={index}>{book.title}</p>
            )
          ))
        ) : (
          <p className="no-books-message">No books available. Please add some.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
