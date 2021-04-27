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
    handleBookSave = (book) => {
        API.saveBook(book);
        console.log(book);
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
                                handleBookSave={this.handleBookSave}
                                btn1={"View"}
                                btn2={"Save"}
                            // BTN2={() => {
                            //     return <button className="btn btn-outline-info" onClick={this.handleBookSave(id)}>SAVE</button>
                            // }} 
                            />
                        )
                    })
                }
            </div >
        );
    }
}


export default SearchBooks;