
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { NewBook } from "../../redux/books/actionCreators";
import "./BookList.css"

export default function BookList() {
    const books = useSelector((state: RootState) => state.books)
    let i = 0;
    return (
        <div className="app-block book-list">
            {
                books.length === 0 ? (
                    <p>No books yet.</p>
                ) : (
                    <ul>
                        {books.map((book: NewBook) => (
                            
                            <li key={book.id}>
                                <div className="book-info">
                                   <span>{++i}</span> {book.title} by <strong>{book.author}</strong>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}