import * as actionType from "./actionType";
import type { NewBook } from "./actionCreators";
interface BookAction {
  type: string;
  payload?: NewBook | string;
}

export const initialState: NewBook[] = [
  { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: "2", title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: "3", title: "1984", author: "George Orwell" },
  { id: "4", title: "Pride and Prejudice", author: "Jane Austen" },
  { id: "5", title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: "6", title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: "7", title: "Fahrenheit 451", author: "Ray Bradbury" },
  { id: "8", title: "Moby-Dick", author: "Herman Melville" },
  { id: "9", title: "War and Peace", author: "Leo Tolstoy" },
  { id: "10", title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
];

const bookReducer = (state = initialState, action: BookAction): NewBook[] => {
  switch (action.type) {
    case actionType.ADD_BOOK:
      return [...state, action.payload as NewBook];
    case actionType.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload)
    default:
      return state;
  }
};

export default bookReducer;