import React from 'react';
import { Book } from '../../interfaces';
import './BookItem.css';

interface Props {
    book: Book;
    removeBook: (bookId: string) => void;

}

export const BookItem: React.FC<Props> = ({ book, removeBook }) => {
    return (
        <li className="book-item">
            {book.title} by {book.author}, {book.price}$
            <div className="delete" onClick={() => { removeBook(book.id) }} />
        </li>
    );
}