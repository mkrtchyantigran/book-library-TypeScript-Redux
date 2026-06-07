import {v4 as uuid} from "uuid";


export default function CreateBook(book: {title: string, author: string}, source: string) {
    return {
        ...book,
        source,
        isFavorite: false,
        id: uuid()
    }
}