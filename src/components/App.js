import React, { useState, useEffect } from 'react';
import Book from 'components/Book/Book';
import { getBooks } from 'api/books';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  return books.map(({ id, title }) => {
    const cover = `//localhost:3001/api/v1/books/${id}/cover`;

    return <Book key={id} title={title} cover={cover} alt={title} />;
  });
}

export default App;
