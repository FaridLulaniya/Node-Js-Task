const mongoose = require("mongoose")
const modelSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    }
})

const movieModel = mongoose.model("MOVIESDATA", modelSchema)
module.exports = movieModel