const Rest = require("../models/rest.model");

module.exports.getAllRest = (req, res) => {
    Rest.find()
        .then(allRest => res.json(allRest))
        .catch(err => res.json(err));
};

module.exports.getOneRest = (req, res) => {
    Rest.findOne({ _id: req.params.id })
        .then(rest => res.json(rest))
        .catch(err => res.json(err))
};

module.exports.createRest = (req, res) => {
    Rest.create(req.body)
        .then(rest => res.json(rest))
        .catch(err => res.json(err));
};

module.exports.updateRest = (req, res) => {
    Rest.update({ _id: req.params.id }, {$set: { name: req.body.name, cuisine: req.body.cuisine}})
        .then(rest => res.json(rest))
        .catch(err => res.json(err))
};

module.exports.deleteRest = (req, res) => {
    Rest.deleteOne({ _id: req.params.id })
        .then(rest => res.json(rest))
        .catch(err => res.json(err));
};





