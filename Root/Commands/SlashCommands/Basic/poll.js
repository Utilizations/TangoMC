const { Client, CommandInteraction, MessageEmbed, Message } = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: 'poll',
    description: 'Creates a poll with many options',
        options: [
        {
            name: 'create',
            description: 'Creates An Interactive Poll',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'title',
                    description: 'The title of poll',
                    type: 'STRING',
                    required: true,
                },
                {
                    name: 'choice1',
                    description: 'A choice',
                    type: 'STRING',
                    required: true,
                },
                {
                    name: 'choice2',
                    description: 'A choice',
                    type: 'STRING',
                    required: true,
                },
                {
                    name: 'choice3',
                    description: 'A choice',
                    type: 'STRING',
                    required: false,
                },
                {
                    name: 'choice4',
                    description: 'A choice',
                    type: 'STRING',
                    required: false,
                },
                {
                    name: 'choice5',
                    description: 'A choice',
                    type: 'STRING',
                    required: false,
                },
                {
                    name: 'choice6',
                    description: 'A choice',
                    type: 'STRING',
                    required: false,
                },
            ],
        },
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
     run: async(client, interaction, container) => {
        if (interaction.options.getSubcommand() == 'create') {
            title = interaction.options.getString('title');
            c1 = interaction.options.getString('choice1');
            c2 = interaction.options.getString('choice2');
            c3 = interaction.options.getString('choice3');
            c4 = interaction.options.getString('choice4');
            c5 = interaction.options.getString('choice5');
            c6 = interaction.options.getString('choice6');
            const pollCreateEmbed = new MessageEmbed()
                .setTitle(title)
                .setColor("DARK_BUT_NOT_BLACK")
                .addFields(
                    { value: '\u200b', name: c1,
                        },
                    { value: '\u200b',
                        name: c2 }
                )
                .setFooter(`Poll By ${interaction.user.tag}`)
                .setTimestamp();

            if (interaction.options.getString('choice3')) {
                pollCreateEmbed.addFields({
                   value: '\u200b',
                    name: c3, 
                });
            }
            if (interaction.options.getString('choice4')) {
                pollCreateEmbed.addFields({
                    value: '\u200b',
                    name: c4,
                });
            }
            if (interaction.options.getString('choice5')) {
                pollCreateEmbed.addFields({
                   value: '\u200b',
                   name: c5
                });
            }
            if (interaction.options.getString('choice6')) {
                pollCreateEmbed.addFields({
                    value: '\u200b',
                    name: c6,
                });
            }

            embedMessage = await interaction.reply({
                embeds: [pollCreateEmbed],
                fetchReply: true,
            });
            embedMessage.react('1️⃣');
            embedMessage.react('2️⃣');

            if (interaction.options.getString('choice3')) {  
                embedMessage.react('3️⃣');
            }
            if (interaction.options.getString('choice4')) {
                embedMessage.react('4️⃣');
            }
            if (interaction.options.getString('choice5')) {
                embedMessage.react('5️⃣');
            }
            if (interaction.options.getString('choice6')) {
                embedMessage.react('6️⃣');
            }
        } else {
            return;
        }
    }, catch (e) {
        const errorEmbed = new MessageEmbed()
        .setColor("RED")
        .setDescription(`⛔ Alert: ${e}`)
        return interaction.reply({embeds: [errorEmbed]});
    }
}