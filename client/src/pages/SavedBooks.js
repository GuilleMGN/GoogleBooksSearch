import React from "react";
import Card from "../components/Card"

function SavedBooks() {
    return (
        <div>
            <br />
            <h2 className="center">Saved Books</h2>
            <br />
            <Card btn1={"View"} btn3={"Delete"} />

        </div>
    );
}

export default SavedBooks;