
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";

import { type NewBook } from "../interfaces/NewBookInterface";
// import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { deleteBook, toggleFavorite, selectBooks } from "../../redux/slices/booksSlice";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { selectFilterTitle, selectFilterAuthor, selectOnlyFavorite } from "../../redux/slices/filterSlice";

import "./BookList.css"

export default function BookList() {

    const books = useSelector(selectBooks)
    
    const titleFilter = useSelector(selectFilterTitle)
    const authorFilter = useSelector(selectFilterAuthor)
    const onlyFavoriteBooks = useSelector(selectOnlyFavorite);

    const dispatch = useDispatch<AppDispatch>();
    let i = 0;

    const handleDeleteBook = (bookId: string) => {
        dispatch(deleteBook(bookId))
    }

    const handleToggleFavorite = (id: string) => {
        dispatch(toggleFavorite(id))
    }
    const filteredBooks = books.filter((book: NewBook) => {
        const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());
        const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase());
        const matchesOnlyFavorite = onlyFavoriteBooks ? book.isFavorite : true;
        return matchesTitle && matchesAuthor && matchesOnlyFavorite;
    })

    const highlightMatch = (text: string, filter: string) => {
        if (!filter) return text

        const regexp = new RegExp(`(${filter})`, 'gi');
        return text.split(regexp).map((part, i) => {
            if (part.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className="highlight">{part}</span>
                )
            }
            return part
        })
    }


    return (
        <div className="app-block book-list">
            {
                filteredBooks.length === 0 ? (
                    <p>No books yet.</p>
                ) : (
                    <ul>
                        {filteredBooks.map((book: NewBook) => (
                            <li key={book.id}>
                                <div className="book-info">
                                    <span>{++i}</span>
                                    {highlightMatch(book.title, titleFilter )} 
                                       by <strong>
                                        {highlightMatch(book.author, authorFilter)}
                                    </strong>
                                    <p className="source">{book.source}</p>
                                </div>
                                <div className="book-actions">

                                    <button className="favorite" onClick={() => handleToggleFavorite(book.id)}>
                                        {book.isFavorite ? <MdFavorite color="magenta" /> : <MdFavoriteBorder />}
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