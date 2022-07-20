const discord = require("discord.js")
const config = require("../../Config")
const db = require("../Structures/Models/InvitesDB")

module.exports = {
    name: "guildMemberAdd",
    run: async(guildMember) => {

        // To compare, we need to load the current invite list.
        const newInvites = await guildMember.guild.invites.fetch()
        // This is the *existing* invites for the guild.
        const oldInvites = invites.get(guildMember.guild.id);
        // Look through the invites, find the one for which the uses went up.
        const invite = newInvites.find(i => i.uses > oldInvites.get(i.code));
        // This is just to simplify the message being sent below (inviter doesn't have a tag property)
        const inviter = await client.users.fetch(invite.inviter.id);
        // Get the log channel (change to your liking)
        const logChannel = guildMember.guild.channels.cache.get(config.welcomeChannel)
        // A real basic message with the information we need. 
        const welcomeembed = new discord.MessageEmbed()
        .setAuthor({name: `${config.serverName} Welcome!`, iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setColor(config.setColor)
        .setDescription(`
        Welcome ${guildMember} to **${config.serverName}**
        `)
        .addField("Invited By:", `${inviter.tag}`)
        .addField("Invite Uses:", `${invite.uses}`)

        inviter
            ? logChannel.send(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`)
            : logChannel.send(`${member.user.tag} joined but I couldn't find through which invite.`);

        db.findOne({ GuildID: guildMember.guild.id, UserID: inviter.tag }, async (err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    GuildID: message.guild.id,
                    UserID: Target.id,
                    Invites: 1,
                })
            } else {
                data.updateOne({Invites: data.Invites + 1})
            }
            data.save()
        });

            
        /*const welcomeembed = new discord.MessageEmbed()
        .setAuthor({name: `${config.serverName} Welcome!`, iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setColor(config.setColor)
        .setDescription(`
        Welcome ${guildMember} to **${config.serverName}**
        `)*/
    }
}