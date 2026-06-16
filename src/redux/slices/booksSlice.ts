
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type NewBook } from "../../components/interfaces/NewBookInterface";
import axios from "axios";
import CreateBook from "../../utils/createBook";
import { setError } from "./errorSlice";


const initialState = {
    books: [],
    isLoadingViaApi: false
};

export const fetchBook = createAsyncThunk(
    "books/fetchBook",
    async (url: string, thunkAPI) => {
        try {
            const res = await axios.get(url)
            return res.data
        } catch (error) {
            thunkAPI.dispatch(setError(error.message));
            throw error;
        }


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
            // return [...state, action.payload]; // immutable
            state.books.push(action.payload) // mutable
        },
        deleteBook: (state, action) => {
            // return state.filter((book) => book.id !== action.payload) // immutable

            const index = state.books.findIndex((book) => book.id === action.payload) // mutable
            if (index !== -1) {
                state.books.splice(index, 1);
            }
        },
        toggleFavorite: (state, action) => {
            // immutable
            // return state.books.map(book => {
            //     if (book.id === action.payload) {
            //         return { ...book, isFavorite: !book.isFavorite }
            //     }
            //     return book;
            // })

            // mutable
            state.books.forEach((book) => {
                if (book.id === action.payload) {
                    book.isFavorite = !book.isFavorite;
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.pending, (state, action) => {
            state.isLoadingViaApi = true;
        });
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.isLoadingViaApi = false;
            if (action.payload.title && action.payload.author) {
                state.books.push(CreateBook(action.payload, "via api"))
            }
        });
        builder.addCase(fetchBook.rejected, (_, action) => {
            state.isLoadingViaApi = false;
            console.log(action)
        })
    }
})

export const { addBook, deleteBook, toggleFavorite } = BooksSlice.actions;
export const selectBooks = (state) => state.books.books
export const selectIsLoadingViaApi = (state) => state.books.isLoadingViaApi

export default BooksSlice.reducer;