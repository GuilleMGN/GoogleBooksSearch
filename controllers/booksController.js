const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .then(data => res.json(data))
    },
    create: function(req, res) {
        db.Book
            .create(req.body)
            .then(data => res.json(data))
    }
}