const SortByDropdown = ({setSortedBy}) => {
    function handleSelection(event) {
        setSortedBy(event.target.value);
    }

    return (
        <div className="dropdown">
            <label>Sort by: </label>
            <select onChange={handleSelection}>
                <option value="created_at">
                    date
                </option>
                <option value="article_id">
                    article ID
                </option>
                <option value="author">
                    author
                </option>
                <option value="votes">
                    votes
                </option>
                <option value="comment_count">
                    comments
                </option>
            </select>
        </div>
    );
}

export default SortByDropdown;