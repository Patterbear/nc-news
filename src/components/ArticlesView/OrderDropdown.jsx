const OrderDropdown = ({handleSelectOrder}) => {
    function handleSelection(event) {
        handleSelectOrder(event.target.value);
    }

    return (
        <div className="dropdown">
            <label>Order: </label>
            <select onChange={handleSelection}>
                <option value="desc">
                    descending
                </option>
                <option value="asc">
                    ascending
                </option>
            </select>
        </div>
    );
}

export default OrderDropdown;