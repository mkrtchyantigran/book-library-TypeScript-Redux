import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: ""
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setTitleFilter: function (state, action) {
            // return {...state, title: action.payload}
            state.title = action.payload
        }
    }
});
export const {setTitleFilter} = filterSlice.actions;
export const selectFilterTitle = (state) => state.filter.title

export default filterSlice.reducer;