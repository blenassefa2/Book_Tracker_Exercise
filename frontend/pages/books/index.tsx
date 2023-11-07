import { useState } from 'react';
import { FaPlus, FaSignOutAlt } from 'react-icons/fa';
import { BookCard } from '../../components/BookCard';

interface Book {
  id: number;
  title: string;
  status: string;
}

const Home = () => {
  const [showAddBook, setShowAddBook] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');

  const handleAddBook = () => {
    if (newBookTitle.trim() !== '') {
      const newBook: Book = { id: Date.now(), title: newBookTitle, status: 'to-read' };
      setBooks([...books, newBook]);
      setNewBookTitle('');
      setShowAddBook(false);
    }
  };

  const handleMoveBook = (id: number, status: string) => {
    const updatedBooks = books.map((book) => (book.id === id ? { ...book, status } : book));
    setBooks(updatedBooks);
  };

  const handleDeleteBook = (id: number) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-200 dark:bg-yellow-700 p-4">
      <div className="absolute top-4 right-4 flex items-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        <FaSignOutAlt className="text-xl mr-2 " />
        <span className="text-lg font-semibold">Logout</span>
      </div>
      <h1 className="text-2xl font-semibold mb-4">My Bookshelf</h1>
      {showAddBook && (
        <div className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Enter book title"
            className="px-4 py-2 mr-2 border rounded"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleAddBook}
          >
            Add
          </button>
        </div>
      )}
      <div className="flex justify-center items-center mb-8">
        <FaPlus className="text-3xl cursor-pointer" onClick={() => setShowAddBook(!showAddBook)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {/* To Read Column */}
        <div className="p-4 border rounded bg-white">
          <h2 className="text-lg font-semibold mb-4">To Read</h2>
          {books
            .filter((book) => book.status === 'to-read')
            .map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                id={book.id}
                state="to-read"
                function1={handleMoveBook}
                function2={handleDeleteBook}
              />
            ))}
        </div>
        {/* In Progress Column */}
        <div className="p-4 border rounded bg-white">
          <h2 className="text-lg font-semibold mb-4">In Progress</h2>
          {books
            .filter((book) => book.status === 'in-progress')
            .map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                id={book.id}
                state="in-progress"
                function1={handleMoveBook}
                function2={handleDeleteBook}
              />
            ))}
        </div>
        {/* Completed Column */}
        <div className="p-4 border rounded bg-white">
          <h2 className="text-lg font-semibold mb-4">Completed</h2>
          {books
            .filter((book) => book.status === 'completed')
            .map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                id={book.id}
                state="completed"
                function1={handleMoveBook}
                function2={handleDeleteBook}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
