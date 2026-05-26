import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/reducer";
import filterSlice from "./slices/filterSlice"

const store = configureStore({
    reducer: {
        books: bookReducer,
        filter: filterSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
