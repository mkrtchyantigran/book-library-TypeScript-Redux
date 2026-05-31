
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import type { RootState } from "../../redux/store";
import { type NewBook } from "../interfaces/NewBookInterface";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { selectFilterTitle, selectFilterAuthor,selectOnlyFavorite } from "../../redux/slices/filterSlice";

import "./BookList.css"

export default function BookList() {

    const books = useSelector((state: RootState) => state.books)

    const titleFilter = useSelector(selectFilterTitle)
    const authorFilter = useSelector(selectFilterAuthor)
    const onlyFavoriteBooks = useSelector(selectOnlyFavorite);

    const dispatch = useDispatch<AppDispatch>();
    let i = 0;

    const handleDeleteBook = (bookId:string) => {
        dispatch(deleteBook(bookId))
    }

    const handleToggleFavorite = (id:string) => {
        dispatch(toggleFavorite(id))
    }
    const filteredBooks = books.filter(book => {
        const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());
        const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase());
        const matchesOnlyFavorite = onlyFavoriteBooks ? book.isFavorite : true;
        return matchesTitle && matchesAuthor && matchesOnlyFavorite;
    })


    return (
        <div className="app-block book-list">
            {
                books.length === 0 ? (
                    <p>No books yet.</p>
                ) : (
                    <ul>
                        {filteredBooks.map((book: NewBook) => (
                            <li key={book.id}>
                                <div className="book-info">
                                    <span>{++i}</span> {book.title} by <strong>{book.author}</strong>
                                </div>
                                <div className="book-actions">
                                    
                                    <button className="favorite" onClick={() => handleToggleFavorite(book.id)}>
                                        {book.isFavorite ? <MdFavorite color="magenta" />: <MdFavoriteBorder /> }
                                    </button>
                                    <button className="delete" onClick={() => handleDeleteBook(book.id)}>delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}