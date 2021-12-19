import React from 'react';
import { Book } from '../../interfaces';
import { BookItem } from '../BookItem/BookItem';


export interface Props {
    books: Book[]
}

export const BooksList: React.FC<Props> = ({ books }) => {
    return (
        <ul>{books.map((book: Book) => <BookItem key={book.id} book={book} />)}</ul>
    );
}