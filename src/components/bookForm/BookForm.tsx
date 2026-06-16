import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
// import { addBook } from "../../redux/books/actionCreators";
import { addBook, fetchBook, selectIsLoadingViaApi } from "../../redux/slices/booksSlice";
import data from "../../data/data.json";
import { FaSpinner } from "react-icons/fa";

import "./BookForm.css";
import CreateBook from "../../utils/createBook";
import { setError, setSuccess } from "../../redux/slices/errorSlice";


export default function BookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch<AppDispatch>();
    const isLoadingViaApi = useSelector(selectIsLoadingViaApi)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title && author) {
            dispatch(addBook(CreateBook({ title, author }, "manual")));
            setTitle("")
            setAuthor("");
            dispatch(setSuccess("the book has been added"))
        } else {
            dispatch(setError("fill the inputs"))
        }

    }

    const handleAddRandomBook = () => {
        const rndid = Math.floor(Math.random() * data.length)
        if (data[rndid]) {
            const title = data[rndid].title
            const author = data[rndid].author
            dispatch(addBook(CreateBook({ title, author }, "via random")));
            dispatch(setSuccess("the book has been added"));
        } else {
            dispatch(setError("the book has been added"));
        }
    }

    // const thunkFunction = async (dispatch, getState) => {
    //     console.log(getState)
    //         try {
    //         const res = await axios.get("http://localhost:5000/random-book")
    //         if (res?.data && res?.data?.title && res?.data?.author) {
    //             dispatch(addBook((CreateBook(res.data, "via api"))))
    //         }
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    //     console.log(getState)
    // }

    const handleAddRandomBookViaAPI = async () => {
        try {
            await dispatch(fetchBook("http://localhost:5000/api-book-with-delay"));
            isLoadingViaApi(false)
        } catch (error) {
            console.log(error);
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
                {

                    <button
                        type="button"
                        disabled={isLoadingViaApi}
                        onClick={handleAddRandomBookViaAPI}
                    >
                        {isLoadingViaApi ? <span className="loading_wrapper"><FaSpinner className="spinner" />Loading...</span> : "Get From API"}

                    </button>
                }
            </form>
        </div>
    )
}