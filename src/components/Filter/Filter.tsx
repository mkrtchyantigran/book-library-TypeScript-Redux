 import { useDispatch, useSelector } from "react-redux";
import { setTitleFilter, selectFilterTitle } from "../../redux/slices/filterSlice";


export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(selectFilterTitle);
    const handleTitleFilterChange = (e: React.FormEvent<HTMLInputElement>) => dispatch(setTitleFilter(e.target.value))

    return (
        <div className="app-block">
            <div className="filter-group">
                <input 
                type="text" 
                placeholder="Filter by title" 
                onChange={handleTitleFilterChange}
                value={value}
                />
            </div>
        </div>
    )
}