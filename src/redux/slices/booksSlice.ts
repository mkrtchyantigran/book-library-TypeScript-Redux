
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type NewBook } from "../../components/interfaces/NewBookInterface";
import axios from "axios";
import CreateBook from "../../utils/createBook";


export const initialState: NewBook[] = [
    { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald", isFavorite: false, source: "default" },
    { id: "2", title: "To Kill a Mockingbird", author: "Harper Lee", isFavorite: true, source: "default" },
    { id: "3", title: "1984", author: "George Orwell", isFavorite: false, source: "default" },
    { id: "4", title: "Pride and Prejudice", author: "Jane Austen", isFavorite: false, source: "default" },
    { id: "5", title: "The Catcher in the Rye", author: "J.D. Salinger", isFavorite: false, source: "default" },
    { id: "6", title: "The Hobbit", author: "J.R.R. Tolkien", isFavorite: false, source: "default" },
    { id: "7", title: "Fahrenheit 451", author: "Ray Bradbury", isFavorite: false, source: "default" },
    { id: "8", title: "Moby-Dick", author: "Herman Melville", isFavorite: false, source: "default" },
    { id: "9", title: "War and Peace", author: "Leo Tolstoy", isFavorite: false, source: "default" },
    { id: "10", title: "Crime and Punishment", author: "Fyodor Dostoevsky", isFavorite: false, source: "default" },
];

export const fetchBook = createAsyncThunk(
    "books/fetchBook",
    async () => {
        // const res = await axios.get("http://localhost:5000/random-book")
        // return await res.data
        const res = await axios.get("http://localhost:5005/random-book")
         return res.data

    }
)

// const thunkFunction = async (dispatch, getState) => {
//     console.log(getState)
//     try {
//         const res = await axios.get("http://localhost:5000/random-book")
//         if (res?.data && res?.data?.title && res?.data?.author) {
//             dispatch(addBook((CreateBook(res.data))))
//         }
//     }
//     catch (e) {
//         console.log(e);
//     }
//     console.log(getState)
// }

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            if (action.payload.title && action.payload.author) {
                state.push(CreateBook(action.payload, "via api"))
            }
        });
        builder.addCase(fetchBook.rejected, (state, action) => {
            console.log(action)
        })
    }
})

export const { addBook, deleteBook, toggleFavorite } = BooksSlice.actions;
export const selectBooks = (state) => state.books

export default BooksSlice.reducer;