import {v4 as uuid} from "uuid";


export default function CreateBook(book: {title: string, author: string}) {
    return {
        ...book,
        isFavorite: false,
        id: uuid()
    }
}