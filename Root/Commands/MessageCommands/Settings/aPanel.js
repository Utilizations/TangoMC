const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "aPanel",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        message.delete()
        const vPanel = new Discord.MessageEmbed()
        .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} Applications`, iconURL: config.serverIcon})
            .setDescription(`
            Here at ${config.serverName} we are always looking for new candidates to join our teams.
            Here is a list of our current teams:
            → Staff
            → Media
            → Development

            If you think you have what It takes to take on one of these roles - please click the corrisponding button to the team you would like to join to fill in the application.


            `)
            .setThumbnail(config.serverIcon)

            const row2 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('staffapp')
					.setLabel('Staff Application')
					.setStyle('SUCCESS'),
                    new Discord.MessageButton()
                    .setCustomId('mediaapp')
					.setLabel('Media Application')
					.setStyle('PRIMARY'),
                    new Discord.MessageButton()
                    .setCustomId('devapp')
					.setLabel('Developer Application')
					.setStyle('DANGER'),
                )
                        await message.channel
                        .send({
                            embeds: [vPanel],
                            components: [row2],
                            allowedMentions: {
                                repliedUser: false
                            }
                        })


    }
}