import * as actionType from "./actionType";

import { type NewBook } from "../../components/interfaces/NewBookInterface";


export const addBook = (newBook: NewBook) => {
    return {
        type: actionType.ADD_BOOK,
        payload: newBook
    }
}

export const deleteBook = (initialBookId: string) => {
    return {
        type: actionType.DELETE_BOOK,
        payload: initialBookId
    }
}

export const toggleFavorite = (id: string) => {
    return  {
        type: actionType.TOGGLE_FAVORITE,
        payload: id
    }
}