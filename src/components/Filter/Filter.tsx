import { useDispatch, useSelector } from "react-redux";
import { setTitleFilter, selectFilterTitle, setAuthorFilter, selectFilterAuthor } from "../../redux/slices/filterSlice";


export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(selectFilterTitle);
    const authorValue = useSelector(selectFilterAuthor)

    const handleTitleFilterChange = (e: React.FormEvent<HTMLInputElement>) => dispatch(setTitleFilter(e.target.value))
    const handleAuthorFilterChange = (e: React.FormEvent<HTMLInputElement>) => dispatch(setAuthorFilter(e.target.value))

    return (
        <div className="app-block">
            <div className="filter-group">
                <input
                    type="text"
                    placeholder="Filter by Title"
                    onChange={handleTitleFilterChange}
                    value={value}
                />
            </div>
            <div className="filter-group">
                <input
                    type="text"
                    placeholder="Filter by author"
                    onChange={handleAuthorFilterChange}
                    value={authorValue}
                />
            </div>
            <div className="favorite_and_reset">
                <input 
                  type="checkbox" 
                />
                <button>Reset</button>
            </div>
        </div>
    )
}