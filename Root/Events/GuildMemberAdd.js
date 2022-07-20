const discord = require("discord.js")
const config = require("../../Config")
const db = require("../Structures/Models/InvitesDB")

module.exports = {
    name: "guildMemberAdd",
    run: async(member) => {

        const welcomeembed = new discord.MessageEmbed()
        .setAuthor({name: `${config.serverName} Welcome!`, iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setColor(config.setColor)
        .setDescription(`
        Welcome ${member} to **${config.serverName}**
        `)
        const logChannel = member.guild.channels.cache.get(config.welcomeChannel)
        logChannel.send({embeds: [welcomeembed]})
    }
}