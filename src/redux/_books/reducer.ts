import * as actionType from "./actionType";
import { type NewBook } from "../../components/interfaces/NewBookInterface";
interface BookAction {
  type: string;
  payload?: NewBook | string;
}

export const initialState: NewBook[] = [
  { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald", isFavorite: false },
  { id: "2", title: "To Kill a Mockingbird", author: "Harper Lee", isFavorite: true },
  { id: "3", title: "1984", author: "George Orwell", isFavorite: false },
  { id: "4", title: "Pride and Prejudice", author: "Jane Austen", isFavorite: false },
  { id: "5", title: "The Catcher in the Rye", author: "J.D. Salinger", isFavorite: false },
  { id: "6", title: "The Hobbit", author: "J.R.R. Tolkien", isFavorite: false },
  { id: "7", title: "Fahrenheit 451", author: "Ray Bradbury", isFavorite: false },
  { id: "8", title: "Moby-Dick", author: "Herman Melville", isFavorite: false },
  { id: "9", title: "War and Peace", author: "Leo Tolstoy", isFavorite: false },
  { id: "10", title: "Crime and Punishment", author: "Fyodor Dostoevsky", isFavorite: false },
];

const bookReducer = (state = initialState, action: BookAction): NewBook[] => {
  switch (action.type) {
    case actionType.ADD_BOOK:
      return [...state, action.payload as NewBook];
    case actionType.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload)
    case actionType.TOGGLE_FAVORITE:
      return state.map(book => {
        if (book.id === action.payload) {
          return {...book, isFavorite: !book.isFavorite}
        }
        return book;
      })
    default:
      return state;
  }
};

export default bookReducer;