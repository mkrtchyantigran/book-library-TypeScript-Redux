import { useDispatch, useSelector } from "react-redux";
import { setTitleFilter, selectFilterTitle, setAuthorFilter, selectFilterAuthor, setOnlyFavoriteBooks, selectOnlyFavorite, resetFilters } from "../../redux/slices/filterSlice";
import "./Filter.css"

export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(selectFilterTitle);
    const authorValue = useSelector(selectFilterAuthor)
    const isFavorite = useSelector(selectOnlyFavorite)

    const handleTitleFilterChange = (e: React.FormEvent<HTMLInputElement>) => dispatch(setTitleFilter(e.target.value))
    const handleAuthorFilterChange = (e: React.FormEvent<HTMLInputElement>) => dispatch(setAuthorFilter(e.target.value))

    const handleCheckBoxIsFavorite  = (e: React.ChangeEvent<HTMLInputElement >) => {
        dispatch(setOnlyFavoriteBooks(e.target.checked))
    }

    const hendleResetAllFilters = () => {
        dispatch(resetFilters())
    }

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
                  onChange={handleCheckBoxIsFavorite}
                  checked={isFavorite}
                />
                <button
                onClick={hendleResetAllFilters}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}