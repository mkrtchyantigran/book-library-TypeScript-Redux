import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    author: ""
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
            // return {...state, author: action.payload}
            state.author = action.payload
        }
    }
});
export const {setTitleFilter, setAuthorFilter} = filterSlice.actions;
export const selectFilterTitle = (state) => state.filter.title
export const selectFilterAuthor = (state) => state.filter.author

export default filterSlice.reducer;