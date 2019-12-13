const mongoose = require("mongoose");

const RestSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, minlength: 3, },
        cuisine: { type: String, required: true, minlength: 3}   
    }, {timestamps: true}
);

module.exports = mongoose.model("Rest", RestSchema);