const discord = require("discord.js")
const config = require("../../Config")

module.exports = {
    name: "guildMemberAdd",
    run: async(guildMember) => {
        const newInvites = await guildMember.guild.invites.fetch()
        // This is the *existing* invites for the guild.
        const oldInvites = invites.get(guildMember.guild.id);
        // Look through the invites, find the one for which the uses went up.
        const invite = newInvites.find(i => i.uses > oldInvites.get(i.code));
        // This is just to simplify the message being sent below (inviter doesn't have a tag property)
        const inviter = await client.users.fetch(invite.inviter.id);
        // Get the log channel (change to your liking)
        inviter
            ? logChannel.send(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`)
            : logChannel.send(`${member.user.tag} joined but I couldn't find through which invite.`);

        const welcomeembed = new discord.MessageEmbed()
        .setAuthor({name: `${config.serverName} Welcome!`, iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setImage(config.serverBanner)
        .setColor(config.setColor)
        .setDescription(`
        Welcome ${guildMember} to **TangoMC**
        `)
        .addField("Invited By:", inter.tag)
        .addField("Invite Code:", intvite.code, true)
        log1 = guildMember.guild.channels.cache.get(config.welcomeChannel)
        log1.send({embeds: [welcomeembed]})
        guildMember.roles.add(config.memberRole)
    }
}