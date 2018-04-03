import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// Here is create the application state object,
//  the key is 'books' and the value is provided
//  by the reducer fucntion BooksReducer

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
