import React, { useState } from 'react';
import { randomID } from '../../utils/randomId';
import { Book } from '../../interfaces';
import './AddBookForm.css'
import { useDispatch } from 'react-redux';
import { addBook as AddBookAction } from './../../redux/booksRedux';

export const AddBookForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();
    const addBook = (book: Book) => dispatch(AddBookAction)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const book: Book = {
            id: randomID(10),
            title: title,
            author: author,
            price: price
        }
        addBook(book);
    }
    return (
        <form className="add-book-form" onSubmit={handleSubmit}>
            Title: <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            Author: <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" />
            Price: <input value={price} onChange={(e) => setPrice(parseInt(e.target.value))} type="number" />
            <button>Add book</button>
        </form>
    );
}
