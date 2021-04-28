const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Book
            .find(req.query)
            .then(data => res.json(data))
    },
    create: function (req, res) {
        db.Book
            .create(req.body)
            .then(data => res.json(data))
    },
    findById: function (req, res) {
        db.Book
            .findById(req.params.id)
            .then(data => res.json(data))
    },
    update: function (req, res) {
        db.Book
            .findOneAndUpdate({ id: req.params.id }, req.body)
            .then(data => res.json(data))
    },
    remove: function (req, res) {
        db.Book
            .findById(req.params.id).remove()
            .then(data => res.json(data))
    }
}