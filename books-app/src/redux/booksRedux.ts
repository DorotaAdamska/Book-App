import { Book } from "../interfaces";
import { ADD_BOOK, REMOVE_BOOK, BookAction, BooksState } from './booksTypes';

// action creators
export const addBook = (payload: Book): BookAction => ({ payload, type: ADD_BOOK });
export const removeBook = (payload: string): BookAction => ({ payload, type: REMOVE_BOOK });

// reducer
export default function reducer(statePart: BooksState = [], action: BookAction): BooksState {
  switch (action.type) {
    case ADD_BOOK:
      return [ ...statePart, action.payload ];
    case REMOVE_BOOK:
      return statePart.filter((book: Book) => book.id !== action.payload);
    default:
      return statePart;
  }
}