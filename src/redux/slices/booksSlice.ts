
import { createSlice } from "@reduxjs/toolkit";
import { type NewBook } from "../../components/interfaces/NewBookInterface";

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

const BooksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action) => {
            return [...state, action.payload]; // immutable
            // state.push(action.payload) // mutable
        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload) // immutable

            // const index = state.findIndex((book) => book.id === action.payload) // mutable
            // if(index !== -1) {
            //     state.splice(index, 1);
            // }
        },
        toggleFavorite: (state, action) => {
            // immutable
            return state.map(book => {
                if (book.id === action.payload) {
                    return { ...book, isFavorite: !book.isFavorite }
                }
                return book;
            })

            // mutable
            // state.forEach((book) => {
            //     if(book.id === action.payload) {
            //         book.isFavorite = !book.isFavorite;
            //     }
            // })
        }
    }
})

export const {addBook, deleteBook, toggleFavorite} = BooksSlice.actions;
export const selectBooks = (state) => state.books

export default BooksSlice.reducer;