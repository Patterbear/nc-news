const SortByDropdown = ({handleSelectSortBy}) => {
    function handleSelection(event) {
        handleSelectSortBy(event.target.value);
    }

    return (
        <div className="dropdown">
            <label>Sort by: </label>
            <select onChange={handleSelection}>
                <option value="created_at">
                    date
                </option>
                <option value="comment_count">
                    comments
                </option>
                <option value="votes">
                    votes
                </option>
            </select>
        </div>
    );
}

export default SortByDropdown;