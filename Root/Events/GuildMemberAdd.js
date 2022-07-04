const discord = require("discord.js")
const config = require("../../Config")
const InvitesTracker = require('@androz2091/discord-invites-tracker');
const tracker = InvitesTracker.init(client, {
    fetchGuilds: true,
    fetchVanity: true,
    fetchAuditLogs: true
});

module.exports = {
    name: "guildMemberAdd",
    run: async(guildMember) => {
        log1 = guildMember.guild.channels.cache.get(config.welcomeChannel)
        guildMember.roles.add(config.memberRole)

        if(type === 'normal'){
            const welcomeembed1 = new discord.MessageEmbed()
            .setAuthor({name: `${config.serverName} Welcome!`, iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setImage(config.serverBanner)
            .setColor(config.setColor)
            .setDescription(`
            Welcome ${guildMember} to **TangoMC**
            `)
            .addField("Invited By:", invite.inviter.username)
            log1.send({embeds: [welcomeembed1]})
        }
    
        else if(type === 'vanity'){
            const welcomeembed2 = new discord.MessageEmbed()
            .setAuthor({name: `${config.serverName} Welcome!`, iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setImage(config.serverBanner)
            .setColor(config.setColor)
            .setDescription(`
            Welcome ${guildMember} to **TangoMC**
            `)
            .addField("Invited By:", "Vanity Invite")
            log1.send({embeds: [welcomeembed2]})
        }
    
        else if(type === 'permissions'){
            const welcomeembed3 = new discord.MessageEmbed()
            .setAuthor({name: `${config.serverName} Welcome!`, iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setImage(config.serverBanner)
            .setColor(config.setColor)
            .setDescription(`
            Welcome ${guildMember} to **TangoMC**
            `)
            .addField("Invited By:", "I need MANAGER_SERVER permissions")
            log1.send({embeds: [welcomeembed3]})
        }
    
        else if(type === 'unknown'){
            const welcomeembed4 = new discord.MessageEmbed()
            .setAuthor({name: `${config.serverName} Welcome!`, iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setImage(config.serverBanner)
            .setColor(config.setColor)
            .setDescription(`
            Welcome ${guildMember} to **TangoMC**
            `)
            .addField("Invited By:", "Unknown")
            log1.send({embeds: [welcomeembed4]})
        }
    }
}