import * as actionType from "./actionType";

export interface NewBook {
    title: string;
    author: string;
}

export const addBook = (newBook: NewBook) => {
    return {
        type: actionType.ADD_BOOK,
        payload: newBook
    }
}