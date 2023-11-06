'use client'

import { useState } from 'react';

const booksData = [
  { id: 1, title: 'Book 1', status: 'to-read' },
  { id: 2, title: 'Book 2', status: 'in-progress' },
  { id: 3, title: 'Book 3', status: 'completed' },
];

const Home = () => {
  const [books, setBooks] = useState(booksData);

  const handleMoveBook = (id: number, status: string) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, status } : book
    );
    setBooks(updatedBooks);
  };

  return (
    <div className="flex justify-center p-8">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4">To Read</h2>
          {books
            .filter((book) => book.status === 'to-read')
            .map((book) => (
              <div
                key={book.id}
                className="bg-white p-2 rounded shadow mb-2 cursor-pointer"
                onClick={() => handleMoveBook(book.id, 'in-progress')}
              >
                {book.title}
              </div>
            ))}
        </div>
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4">In Progress</h2>
          {books
            .filter((book) => book.status === 'in-progress')
            .map((book) => (
              <div
                key={book.id}
                className="bg-white p-2 rounded shadow mb-2 cursor-pointer"
                onClick={() => handleMoveBook(book.id, 'completed')}
              >
                {book.title}
              </div>
            ))}
        </div>
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4">Completed</h2>
          {books
            .filter((book) => book.status === 'completed')
            .map((book) => (
              <div
                key={book.id}
                className="bg-white p-2 rounded shadow mb-2 cursor-pointer"
                onClick={() => handleMoveBook(book.id, 'to-read')}
              >
                {book.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
