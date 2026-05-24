import * as actionType from "./actionType";
import type { NewBook } from "./actionCreators";

interface BookAction {
  type: string;
  payload?: NewBook | string;
}

export const initialState: NewBook[] = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Moby-Dick", author: "Herman Melville" },
  { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
];

const bookReducer = (state = initialState, action: BookAction): NewBook[] => {
  switch (action.type) {
    case actionType.ADD_BOOK:
      return [...state, action.payload as NewBook];
    default:
      return state;
  }
};

export default bookReducer;