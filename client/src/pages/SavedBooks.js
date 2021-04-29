import React, { Component } from "react";
import Card from "../components/Card"
import API from "../utils/API";

class SavedBooks extends Component {
    state = {
        query: "",
        books: []
    }
    componentDidMount = () => {
        this.getSavedBooks();
    }
    getSavedBooks = () => {
        API.getSaved()
            .then(response => {
                console.log(response);
                this.setState({
                    books: response.data
                })
            })
            .catch(err => console.log(err));
    }
    handleDelete = (id) => {
        const book = this.state.books.find((book) => book._id === id);
        console.log("HEY", book._id)
        API.remove(book._id)
        .then(res => {
            console.log("Deleted", res);
            this.displaySavedBooks();
        })
        .catch(err => {
            console.log(err);
        })
    }
    displaySavedBooks = (books) => {
        if (!books.length) return null;

        return books.map((book, index) => (
            // <div key={index}>
            //     <h3>{book.title}</h3>
            //     <p>{book.description}</p>
            // </div>
            <div className="container">
            <div key={index} className="cardBorder" >
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <img className="book-img" src={book.image} alt={book.title} />
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="end">
                                    <button className="btn btn-outline-info" onClick={() => window.open(book.link, "_blank")} >View</button>
                                    <button className="btn btn-outline-info" onClick={() => this.handleDelete(book._id)}>Delete</button>
                                </div>
                                <h4>{book.title}</h4>
                                <h5>{book.authors}</h5>
                                <h6 className="overflow">{book.description}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))
    }
    render() {
        return (
            <div>
                <br />
                <h2 className="center">Saved Books</h2>
                <br />
                {this.displaySavedBooks(this.state.books)}

            </div>
        );
    }
}

export default SavedBooks;