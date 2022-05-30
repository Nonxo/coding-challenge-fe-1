import React from "react"
import FilterOptions from "./FilterOptions";

const Form = ({ handleChange, handleKeyDown, handleSubmit, handleFilter }) => {

    return (
       <React.Fragment>
           <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
           <button type="button" onClick={handleSubmit}>Add</button>
           <FilterOptions handleFilter={handleFilter} />
       </React.Fragment>
    )
}

export default Form