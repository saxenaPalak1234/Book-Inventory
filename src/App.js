import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './Components/BookList/BookList';
import AddBook from './Components/AddBook/AddBook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);


    const handleDelete = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
    toast.success("Book Deleted Successfully")

    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  const handleEdit = (index) => {
    setCurrentBook({ ...books[index], index });
    setIsEditing(true);
  };

  const handleUpdate = (updatedBook) => {
    const updatedBooks = books.map((book, index) =>
      index === updatedBook.index ? updatedBook : book
    );
    setBooks(updatedBooks);
    toast.success("Book Updated Successfully")
    localStorage.setItem('books', JSON.stringify(updatedBooks)); 
    setIsEditing(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <ToastContainer />
      <AddBook
        books={books}
        setBooks={setBooks}
        currentBook={currentBook}
        isEditing={isEditing}
        handleUpdate={handleUpdate}
        setIsEditing={setIsEditing}
      />
      <BookList
        books={filteredBooks}
        setBooks={setBooks}
        handleEdit={handleEdit}
        onSearch={handleSearch}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;

