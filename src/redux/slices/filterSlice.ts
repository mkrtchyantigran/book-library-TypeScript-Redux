import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    author: "",
    isFavorite: false
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setTitleFilter: function (state, action) {
            // return {...state, title: action.payload}
            state.title = action.payload
        },
        setAuthorFilter: function (state, action) {
            // return {...state, author: action.payload} // unmutable
            state.author = action.payload // mutable
        },
        setOnlyFavoriteBooks: function (state, action) {
            state.isFavorite = action.payload // mutable
        },
        resetFilters: function () {
            return initialState
        }
    }
});
export const {setTitleFilter, setAuthorFilter, setOnlyFavoriteBooks, resetFilters} = filterSlice.actions;
export const selectFilterTitle = (state) => state.filter.title
export const selectFilterAuthor = (state) => state.filter.author
export const selectOnlyFavorite = (state) => state.filter.isFavorite

export default filterSlice.reducer;