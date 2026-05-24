import * as actionType from "./actionType";

export interface NewBook {
    title: string;
    author: string;
    id: string;
}

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