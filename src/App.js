// import React, { useState, useEffect } from 'react';
// import './App.css';
// import BookList from './Components/BookList/BookList';
// import AddBook from './Components/AddBook/AddBook';

// function App() {
//   const [books, setBooks] = useState([]);
//   const [currentBook, setCurrentBook] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const storedBooks = localStorage.getItem('books');
//     if (storedBooks) {
//       setBooks(JSON.parse(storedBooks));
//     }
//   }, []);

  
//   const handleDelete = (index) => {
//     const updatedBooks = books.filter((_, i) => i !== index);
//     setBooks(updatedBooks);

//     // Update localStorage with the updated list of books
//     localStorage.setItem('books', JSON.stringify(updatedBooks));
//   };

//   const handleEdit = (index) => {
//     setCurrentBook({ ...books[index], index });
//     setIsEditing(true);
//   };

//   const handleUpdate = (updatedBook) => {
//     const updatedBooks = books.map((book, index) =>
//       index === updatedBook.index ? updatedBook : book
//     );
//     setBooks(updatedBooks);
//     localStorage.setItem('books', JSON.stringify(updatedBooks));  
//     setIsEditing(false);
//   };

//   return (
//     <div className="container">
//       <AddBook
//         books={books}
//         setBooks={setBooks}
//         currentBook={currentBook}
//         isEditing={isEditing}
//         handleUpdate={handleUpdate}
//         setIsEditing={setIsEditing}
//       />
//       <BookList books={books} setBooks={setBooks} handleEdit={handleEdit}  handleDelete={handleDelete} />
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './Components/BookList/BookList';
import AddBook from './Components/AddBook/AddBook';

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

  const handleEdit = (index) => {
    setCurrentBook({ ...books[index], index });
    setIsEditing(true);
  };

  const handleUpdate = (updatedBook) => {
    const updatedBooks = books.map((book, index) =>
      index === updatedBook.index ? updatedBook : book
    );
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));  // Save updated books to localStorage
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
      />
    </div>
  );
}

export default App;

