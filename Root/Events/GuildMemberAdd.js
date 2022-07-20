const discord = require("discord.js")
const config = require("../../Config")
const db = require("../Structures/Models/InvitesDB")

module.exports = {
    name: "guildMemberAdd",
    run: async(guildMember) => {
        let invites = await guildMember.guil.fetchInvites();
        let userInv = invites.filter(u => u.inviter && u.inviter.id === invites.inviter.id)

        db.findOne({ GuildID: message.guild.id, UserID: userInv}, async (err, data) => {
            if(err) throw err;
            if(data) {
                data.updateOne({Invites: data.Invites + 1})
            }else {
                const obj = {
                    VoterID: 1,
                }
                data.Invites.push(obj)
                data.save()
            }
        })
        
        const welcomeembed = new discord.MessageEmbed()
        .setAuthor({name: `${config.serverName} Welcome!`, iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setColor(config.setColor)
        .setDescription(`
        Welcome ${guildMember} to **${config.serverName}**
        `)
        const logChannel = guildMember.guild.channels.cache.get(config.welcomeChannel)
        logChannel.send({embeds: [welcomeembed]})
    }
}