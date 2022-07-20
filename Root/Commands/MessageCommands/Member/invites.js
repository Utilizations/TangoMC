const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/InvitesDB")

module.exports = {
    name: "invites",
    run: async(client, message, args, container) => {
        message.delete()
        Target = message.mentions.members.size === 1 ? message.mentions.members.first() : message.guild.members.cache.get(args[0])

        if(!Target) {
            db.findOne({ GuildID: message.guild.id, UserID: message.author.tag }, async (err, data) => {
                if(err) throw err;
                message.channel.send(`${message.author} you have ${data.Invites} invites.`)
            })
        }else {
            db.findOne({ GuildID: message.guild.id, UserID: Target.tag }, async (err, data) => {
                if(err) throw err;
                message.channel.send(`${Target} has ${data.Invites} invites.`)
            }) 
        }

    }
}