const Discord = require("discord.js")
const config = require("../../Config");
const db = require("../Structures/Models/SuggestDB");

module.exports = {
    name: "interactionCreate",
    run: async(interaction, client) => {
        const loadCommandOptions = require("../Structures/CommandOptions/loadCommandOptions")
        if (interaction.isButton()) loadCommandOptions(client, interaction, client.commands.buttonCommands.get(interaction.customId), true, "Button")
        else if (interaction.isSelectMenu()) loadCommandOptions(client, interaction, client.commands.selectMenus.get(interaction.values[0] ?? interaction.customId), true, "SelectMenus")
        else if (interaction.isCommand()) loadCommandOptions(client, interaction, client.commands.slashCommands.get(interaction.commandName), true, "SlashCommand")
        else if (interaction.isContextMenu()) loadCommandOptions(client, interaction, client.commands.contextMenus.get(interaction.commandName), true, "ContextMenus")

        if (!interaction.isModalSubmit()) return;

        if (interaction.customId === 'bugplayer') {
            interaction.channel.bulkDelete(2)
            const reporter = interaction.fields.getTextInputValue('ign')
            const server = interaction.fields.getTextInputValue('realm')
            const player = interaction.fields.getTextInputValue('reporter')
            const description = interaction.fields.getTextInputValue('problem')

            const embed1 = new Discord.MessageEmbed()
            .setAuthor({name: `New ticket created.`, iconURL: config.serverIcon})
            .setDescription(`
            :wave: Thank you ${interaction.member} for making a ticket.

            Category:
            ➥ **Player/Bug Report**

            Here are the responses;
            ➥ **IGN**: ${reporter}
            ➥ **Realm**: ${server}
            ➥ **Reporting**: ${player}
            ➥ **Summary**: ${description}

            *A member of staff will review this ticket when they get the chance, please be patient.*
            `)
            const row1 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('close')
                    .setLabel('Close')
                    .setStyle('DANGER'),
                new Discord.MessageButton()
                    .setCustomId('claim')
                    .setLabel('Claim')
                    .setStyle('SUCCESS'),
                )
            interaction.reply({embeds: [embed1], components: [row1]})
        }
        if (interaction.customId === 'buycraft') {
            interaction.channel.bulkDelete(2)
            const reporter = interaction.fields.getTextInputValue('ign')
            const server = interaction.fields.getTextInputValue('realm')
            const description = interaction.fields.getTextInputValue('problem')

            const embed2 = new Discord.MessageEmbed()
            .setAuthor({name: `New ticket created.`, iconURL: config.serverIcon})
            .setDescription(`
            :wave: Thank you ${interaction.member} for making a ticket.

            Category:
            ➥ **Buycraft Support**

            Here are the responses;
            ➥ **IGN**: ${reporter}
            ➥ **Transaction ID**: ${server}
            ➥ **Breif Description**: ${description}

            *A member of staff will review this ticket when they get the chance, please be patient.*
            `)
            const row2 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('close')
                    .setLabel('Close')
                    .setStyle('DANGER'),
                new Discord.MessageButton()
                    .setCustomId('claim')
                    .setLabel('Claim')
                    .setStyle('SUCCESS'),
                )
            interaction.reply({embeds: [embed2], components: [row2]})
        }
        if (interaction.customId === 'general') {
            interaction.channel.bulkDelete(2)
            const reporter = interaction.fields.getTextInputValue('ign')
            const server = interaction.fields.getTextInputValue('realm')
            const description = interaction.fields.getTextInputValue('problem')

            const embed3 = new Discord.MessageEmbed()
            .setAuthor({name: `New ticket created.`, iconURL: config.serverIcon})
            .setDescription(`
            :wave: Thank you ${interaction.member} for making a ticket.

            Category:
            ➥ **General Support**

            Here are the responses;
            ➥ **IGN**: ${reporter}
            ➥ **Realm**: ${server}
            ➥ **Breif Description**: ${description}

            *A member of staff will review this ticket when they get the chance, please be patient.*
            `)
            const row3 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('close')
                    .setLabel('Close')
                    .setStyle('DANGER'),
                new Discord.MessageButton()
                    .setCustomId('claim')
                    .setLabel('Claim')
                    .setStyle('SUCCESS'),
                )
            interaction.reply({embeds: [embed3], components: [row3]})
        }
        if (interaction.customId === 'ingame') {
            interaction.channel.bulkDelete(2)
            const reporter = interaction.fields.getTextInputValue('ign')
            const server = interaction.fields.getTextInputValue('realm')
            const description = interaction.fields.getTextInputValue('problem')

            const embed4 = new Discord.MessageEmbed()
            .setAuthor({name: `New ticket created.`, iconURL: config.serverIcon})
            .setDescription(`
            :wave: Thank you ${interaction.member} for making a ticket.

            Category:
            ➥ **In-Game Support**

            Here are the responses;
            ➥ **IGN**: ${reporter}
            ➥ **Realm**: ${server}
            ➥ **Breif Description**: ${description}

            *A member of staff will review this ticket when they get the chance, please be patient.*
            `)
            const row4 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('close')
                    .setLabel('Close')
                    .setStyle('DANGER'),
                new Discord.MessageButton()
                    .setCustomId('claim')
                    .setLabel('Claim')
                    .setStyle('SUCCESS'),
                )
            interaction.reply({embeds: [embed4], components: [row4]})
        }
        if (interaction.customId === 'suggest') {
            const description = interaction.fields.getTextInputValue('problem')
            const suggestionembed = new Discord.MessageEmbed()
            .setAuthor({name: `${config.serverName} Suggestion`, iconURL: config.serverIcon})
            .setDescription(`
            💡**Suggestion:**
            > ${description}

            📍**Information**
            > **Status**: Pending 🟠
            > **Upvotes**: 0
            > **Downvotes**: 0
            `)
            const row1 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                .setCustomId('upvote')
                .setEmoji('🔼')
                .setLabel('Upvote')
                .setStyle('SUCCESS'),
                new Discord.MessageButton()
                .setCustomId('downvote')
                .setEmoji('🔽')
                .setLabel('Downvote')
                .setStyle('DANGER'),
                )
            const msg = await interaction.channel.send({embeds: [suggestionembed], components: [row1]})
            data = new db({
                UserID: interaction.member,
                SuggestionId: msg.id,
                SuggestionTitle: description,
                Upvotes: 0,
                Downvotes: 0,
                Status: "Open",
                Voters: [{ VoterID: interaction.member }]
            })
            data.save()
        }
        if (interaction.customId === 'staff') {
            const answer1 = interaction.fields.getTextInputValue('ign1')
            const answer2 = interaction.fields.getTextInputValue('age1')
            const answer3 = interaction.fields.getTextInputValue('why1')
            const answer4 = interaction.fields.getTextInputValue('experinces1')
            const answer5 = interaction.fields.getTextInputValue('else1')

            const category = "999672483529637898"
            await interaction.guild.channels.create(`Staff Application`, {
                type: "GUILD_TEXT",
                parent: category,
                permissionOverwrites: [
                    {
                        id: member.id,
                        allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"],
                    },
                    {
                        id: config.staffRole,
                        allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"],
                    },
                    {
                        id: interaction.guild.roles.everyone,
                        deny: ["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"],
                    },
                ],
            }).then(async(channel) => {
        
                const Embed = new Discord.MessageEmbed()
                .setColor(config.serverColor)
                .setAuthor({name: `${config.serverName} Application`, iconURL: config.serverIcon})
                .addField("IGN.", answer1)
                .addField("Age.", answer2)
                .addField("Why do you want to be staff?.", answer3.substring(0, 1024))
                .addField("Why do you want to be staff? #2", answer3.substring(0, 2049))
                .addField("Experiences.", answer4.substring(0, 1024))
                .addField("Experiences #2", answer4.substring(0, 2049))
                .addField("Anything else?.", answer5.substring(0, 1024))
                .addField("Anything else? #2", answer5.substring(1025, 2049))
                .setThumbnail(config.serverIcon)

                const msgstaff = channel.send({
                    embeds: [Embed],
                });
                await channel
                .send({content: `> ${member} here is your application.`})
                .then ((m) => {
                    setTimeout(() => {
                        m.delete().catch(() => {});
                    }, 1 * 5000);
                })
                msgstaff.react("✅")
                msgstaff.react("❌")
    
                await interaction.channel
                .send({content: `> ${member} your application has been created: ${channel}`})
                .then ((m) => {
                    setTimeout(() => {
                        m.delete().catch(() => {});
                    }, 1 * 5000);
                });
            })
        }
        if (interaction.customId === 'media') {
            
        }
        if (interaction.customId === 'developer') {
            
        }
    }
}