const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "about",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        message.delete()
        const tPanel = new Discord.MessageEmbed()
        .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} | About us`, iconURL: config.serverIcon})
            .setDescription(`
            AhertMC is a 1.8-1.18 Skyblock server, with hopes to expand into further gamemodes.

            AhertMC was started by an experienced server Manager/Developer who had taken upon himself to try his own project.
            He aims to bring something new into the Minecraft Community by providing a unique and enjoyable network, for new and experienced players to join along and play.

            AhertMC was established in the middle of 2022.

            📍 Use the buttons below to find any information about the server you need.

            🏆 FEATURES:
            Weekly Payouts
            Robot System
            Balanced Economy
            Custom Enchants
            Darkzone

            ✨ Island Top & Harvest Top Payouts

            🔑 Island Bundle:
            If your island has a roster of 5+ you are able to redeem a island bundle.
            This bundle consists of 2 ranks, 3 keys for each member, and 1 Monthly Crate.
            If you would like to claim this please make a ticket.
            `)
            .setThumbnail(config.serverIcon)
            .setImage(config.serverBanner)

            const row = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('forums')
					.setLabel('Forums')
					.setStyle('SECONDARY'),
                    new Discord.MessageButton()
                    .setCustomId('ip')
					.setLabel('Sever Ip')
					.setStyle('SUCCESS'),
                    new Discord.MessageButton()
                    .setCustomId('rules')
					.setLabel('Rules')
					.setStyle('DANGER'),
                    new Discord.MessageButton()
                    .setCustomId('applications')
					.setLabel('Applications')
					.setStyle('PRIMARY')
                )
                        await message.channel
                        .send({
                            embeds: [tPanel],
                            components: [row],
                            allowedMentions: {
                                repliedUser: false
                            }
                        })


    }
}