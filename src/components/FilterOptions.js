import React from "react";

const FilterOptions = ({ handleFilter }) => {

    return (
        <React.Fragment>
            <input type="radio" id="all" name="filterTodo" value="ALL" onClick={handleFilter} />
            <label htmlFor="show-all">Show all</label>
            <input type="radio" id="open" name="filterTodo" value="OPEN" onClick={handleFilter} />
            <label htmlFor="show-all">Show open</label>
            <input type="radio" id="closed" name="filterTodo" value="CLOSED" onClick={handleFilter} />
            <label htmlFor="show-all">Show closed</label>
        </React.Fragment>
    )
}

export default FilterOptions