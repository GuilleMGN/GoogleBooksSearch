import React from "react";
import Searchbar from "../components/Searchbar"
import Card from "../components/Card"

function SearchBooks() {
    return (
        <div>
            <Searchbar />
            <Card btn1={"View"} btn2={"Save"} />
        </div>
    );
}

export default SearchBooks;