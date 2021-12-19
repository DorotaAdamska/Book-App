import React, { useState } from 'react';
import { Book } from './interfaces';
import { BooksList } from './components/BooksList/BooksList';

const booksData: Book[] = [
  { id: 'te1314derw', title: 'Of Mice and Men', author: 'John Steinbeck', price: 25 },
  { id: 't32s14dzdw', title: 'East of Eden', author: 'John Steinbeck', price: 30 }
];

const App: React.FC = () => {
  const [books, setBooks] = useState(booksData);

  return (
    <div className="container">
      <header>
        <h1>Books App</h1>
      </header>
      <BooksList books={books} />
    </div>
  );
}

export default App;