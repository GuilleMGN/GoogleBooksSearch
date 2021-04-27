import React from "react";
import "./Searchbar.css"

function Searchbar({handleInputChange, handleFormSubmit, handleKeyDown}) {
    return (
        <div className="container">
            <div className="searchBorder">
                <div className="container h-100">
                    <br />
                    <h2>Search Books</h2>
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input className="search_input" type="text" placeholder="Search..." onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                            <span className="search_icon" onClick={handleFormSubmit}> 
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Searchbar;