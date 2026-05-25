import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../../redux/books/actionCreators";
import data from "../../data/data.json";

import "./BookForm.css";


export default function BookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title && author) {
            dispatch(addBook({id: uuidv4(), title, author, isFavorite: false}));
            setTitle("")
            setAuthor("");
        }

    }

    const handleAddRandomBook = () => {
        const rndid = Math.floor(Math.random() * data.length)
        if( data[rndid]) {
            const id = uuidv4();
            const title = data[rndid].title
            const author = data[rndid].author
            dispatch(addBook({id, title, author, isFavorite: false}))
        }
    }

    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="title">Author</label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <button type="submit">Add Book</button>
                <button type="button" onClick={handleAddRandomBook}>Add Random Book</button>
            </form>
        </div>
    )
}