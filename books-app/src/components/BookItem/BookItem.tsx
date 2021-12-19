import React from 'react';
import { Book } from '../../interfaces';

interface Props {
    book: Book;
  }

export const BookItem: React.FC<Props> = ({ book }) => {
    return (
        <li>{book.title} by {book.author}, {book.price}$</li>
    );
}