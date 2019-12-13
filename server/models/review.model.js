const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, minlength: 3, },
        review: { type: String, required: true, minlength: 3},
        rating: {type: Number, required: true},
        restID: {type: String, required: true}
    }, {timestamps: true}
);

module.exports = mongoose.model("Review", ReviewSchema);