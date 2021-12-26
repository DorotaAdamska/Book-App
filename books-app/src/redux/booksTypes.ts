import { Book } from '../interfaces';

export type BooksState = Array<Book>;

// action types
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// action creators interfaces
interface AddBookAction {
    type: 'ADD_BOOK' ;
    payload: Book;
}

interface RemoveBookAction {
    type: 'REMOVE_BOOK';
    payload: string
}

export type BookAction = AddBookAction | RemoveBookAction
