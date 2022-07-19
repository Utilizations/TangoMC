const { Schema, model } = require('mongoose');

module.exports = model("SuggestDB", new Schema({
    UserID: String,
    SuggestionId: String,
    SuggestionTitle: String,
    Upvotes: Number,
    Downvotes: Number,
    Status: String,
    Voters: Array,

}))