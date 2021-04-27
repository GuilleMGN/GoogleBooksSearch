import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import Card from "../components/Card";
import API from "../utils/API";

class SearchBooks extends Component {
    state = {
        query: "The Hunger Games",
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
        console.log(id);
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
                                title={volumeInfo.title}
                                authors={volumeInfo.authors}
                                description={volumeInfo.description}
                                image={volumeInfo.imageLinks.thumbnail}
                            // btn1={handleBookSave={this.handleBookSave(id)}}
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