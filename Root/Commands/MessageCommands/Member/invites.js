const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/InvitesDB")

module.exports = {
    name: "invites",
    run: async(client, message, args, container) => {
        message.delete()


    }
}