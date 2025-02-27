const Review = require("../models/review.model");

module.exports.getAllReviews = (req, res) => {
    Review.find({ restID: req.params.id }).sort({ rating: 'descending'})
        .then(AllReviews => res.json(AllReviews))
        .catch(err => res.json(err));
};

module.exports.createReview = (req, res) => {
    Review.create(req.body)
        .then(cake => res.json(cake))
        .catch(err => res.json(err));
};