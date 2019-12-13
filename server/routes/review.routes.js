const reviewController = require("../controllers/review.controller");

module.exports = app => {
    app.get("/api/restaurants/reviews/:id", reviewController.getAllReviews);
    app.post("/api/restaurants/:id/review", reviewController.createReview);
}