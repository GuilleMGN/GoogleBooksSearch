import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    search: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },
    saveBook: function(book) {
        return axios.post("/" + book.id);
    }
}