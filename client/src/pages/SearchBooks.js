import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import Card from "../components/Card";
import API from "../utils/API";

class SearchBooks extends Component {
    state = {
        query: "",
        books: []
    }
    handleFormSubmit = () => {
        API.search(
            this.state.query
        )
            .then(response => {
                console.log(response);
                this.setState({
                    books: response.data.items
                })
            })
            .catch(err => console.log(err));
    }
    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.handleFormSubmit();
        }
    }
    handleInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            query: e.target.value
        })
    }
    handleBookSave = (id) => {
        console.log("Saving book ID ", id);
        const book = this.state.books.find((book) => book.id === id);
        console.log(book);
        API.saveBook({
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors[0],
            description: book.volumeInfo.description,
            link: book.volumeInfo.infoLink,
            image: book.volumeInfo.imageLinks.thumbnail
            // id: 1,
            // title: "Hunger Games",
            // authors: "TEST",
            // description: "TEST",
            // link: "TEST",
            // image: "TEST"
        })
            .then(res => console.log("Book Saved", res))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <Searchbar
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    handleKeyDown={this.handleKeyDown}
                />
                {
                    this.state.books.map(({ id, volumeInfo }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                title={volumeInfo.title}
                                authors={volumeInfo.authors}
                                description={volumeInfo.description}
                                link={volumeInfo.infoLink}
                                image={volumeInfo.imageLinks.thumbnail}
                                btn1={"View"}
                                btn2={"Save"}
                                handleBookSave={this.handleBookSave}
                            />
                        )
                    })
                }
            </div >
        );
    }
}


export default SearchBooks;