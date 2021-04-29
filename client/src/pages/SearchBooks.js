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
    }
    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.handleFormSubmit();
        }
    }
    handleInputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            query: e.target.value
        })
    }
    handleBookSave = (id) => {
        console.log("IVE BEEN CLICKED");
        const book = this.state.books.find((book) => book.id === id);
        API.saveBook({
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            link: book.volumeInfo.infoLink,
            image: book.volumeInfo.thumbnail
        // }).then(() => {
        //     alert("Book Saved");
        //     this.search();
        });
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