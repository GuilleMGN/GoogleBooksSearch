const mongoose = require("mognoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: { type: Number },
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;