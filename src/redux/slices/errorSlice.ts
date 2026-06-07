import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: "",
    date: "",
    email: "tigranmkrtchyan295@gmail.com"
}

const errorSlice = createSlice ({
    name: "error",
    initialState,
    reducers: {
        setSuccess: (_, action) => {
            return action.payload
        },
        setError: (_, action) => {
            return action.payload
        },
        clearError: () => {
            return initialState;
        }
    }
});

export const {setError, clearError, setSuccess} = errorSlice.actions;
export const selectErrorMessage = (state) => state.error
export default errorSlice.reducer