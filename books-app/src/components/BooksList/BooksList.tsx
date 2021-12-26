import React from 'react';
import { Book } from '../../interfaces';
import { BookItem } from '../BookItem/BookItem';
import './BooksList.css';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../redux/mainTypes';
import { removeBook as RemoveBookAction } from './../../redux/booksRedux';


export const BooksList: React.FC = () => {
    const books = useSelector((state: StoreState) => state.books);
    const dispatch = useDispatch();
    const removeBook = (id: string) => dispatch(RemoveBookAction(id));


    return (
        <ul className="book-list">{books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={removeBook} />)}</ul>
    );
}