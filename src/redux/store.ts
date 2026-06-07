import { configureStore } from "@reduxjs/toolkit";
// import bookReducer from "./books/reducer";
import booksSlice from "./slices/booksSlice"
import filterSlice from "./slices/filterSlice"
import errorSlice from "./slices/errorSlice"

const store = configureStore({
    reducer: {
        books: booksSlice,
        filter: filterSlice,
        error: errorSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
