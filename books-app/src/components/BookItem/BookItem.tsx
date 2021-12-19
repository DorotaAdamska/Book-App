import React from 'react';
import { Book } from '../../interfaces';
import './BookItem.css';

interface Props {
    book: Book;
  }

export const BookItem: React.FC<Props> = ({ book }) => {
    return (
        <li className="book-item">{book.title} by {book.author}, {book.price}$</li>
    );
}