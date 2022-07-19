const { Schema, model } = require('mongoose');

module.exports = model("SuggestDB", new Schema({
    UserID: String,
    SuggestionID: Number,
    SuggestionTitle: String,
    Upvotes: Number,
    Downvotes: Number,
    Status: String,
    Voters: Array,

}))