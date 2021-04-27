import React from "react";
import "./Searchbar.css"

function Searchbar() {
    return (
        <div className="container">
            <div className="searchBorder">
                <div className="container h-100">
                    <br />
                    <h2>Search Books</h2>
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input className="search_input" type="text" placeholder="Search..." />
                            <span className="search_icon"> <i class="fas fa-search"></i> </span>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Searchbar;