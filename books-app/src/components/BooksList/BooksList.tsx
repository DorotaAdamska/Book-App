import React from 'react';
import { Book } from '../../interfaces';
import { BookItem } from '../BookItem/BookItem';
import './BooksList.css';


export interface Props {
    books: Book[],
    removeBook: (bookId: string) => void;
}

export const BooksList: React.FC<Props> = ({ books, removeBook }) => {
    return (
        <ul className="book-list">{books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={removeBook} />)}</ul>
    );
}