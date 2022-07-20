const { Schema, model } = require('mongoose');

module.exports = model("InvitesDB", new Schema({
    GuildID: String,
    UserID: String,
    Invites: Number

}))