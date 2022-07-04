const { Client, CommandInteraction, MessageEmbed, Message } = require("discord.js");
const config = require("../../../Config");

module.exports = {
    name: "settings",
    description: "fetch's the id of target member.",
    options: [
        {
            name: "tickets",
            description: "tickets",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "ticketcategory",
                    description: "Set the ticket Category",
                    type: "STRING"
                },
                {
                    name: "ticketopen",
                    description: "Set the ticket open-channel",
                    type: "STRING"
                },
                {
                    name: "ticketlogs",
                    description: "Set the ticket logs channel.",
                    type: "STRING"
                },
            ]
        },
        {
            name: "suggestions",
            description: "suggestion",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "suggestionchannel",
                    description: "Set the suggestions channel",
                    type: "STRING"
                },
            ]
        },
        {
            name: "misc",
            description: "misc",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "logchannel",
                    description: "Set the log channel.",
                    type: "STRING"
                },
                {
                    name: "welcomechannel",
                    description: "Set the welcome channel.",
                    type: "STRING"
                },
                {
                    name: "serverlogo",
                    description: "Set the servers logo.",
                    type: "STRING"
                },
                {
                    name: "serverbanner",
                    description: "Set the servers banner.",
                    type: "STRING"
                },
            ]
        },
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
     run: async(client, interaction, container) => {
        //const choices = interaction.options.getString("member");
        const ticketcat = interaction.options.getString("ticketcategory") || "N/A";
        const ticketopen = interaction.options.getString("ticketopen") || "N/A";
        const ticketlog = interaction.options.getString("ticketlogs") || "N/A";
        const sugchannel = interaction.options.getString("suggestionchannel") || "N/A";
        const logchannel = interaction.options.getString("logchannel") || "N/A";
        const welcomechannel = interaction.options.getString("welcomechannel") || "N/A";
        const serverlogo = interaction.options.getString("serverlogo") || "N/A";
        const serverbanner = interaction.options.getString("serverbanner") || "N/A";

        const Sub = interaction.options.getSubcommand();

        switch(Sub) {
            case "tickets" : {
                const obj = {
                    TicketCategory: ticketcat,
                    TicketCategory: ticketopen,
                    TicketCategory: ticketlog,
                }
                data.Content.push(obj)
                data.save()
            }
            break;

            case "suggestions" : {
                const obj = {
                    SuggestionChannel: sugchannel,
                }
                data.Content.push(obj)
                data.save()
            }
            break;

            case "misc" : {
                const obj = {
                    LogChannel: logchannel,
                    WelcomeChannel: welcomechannel,
                    ServerLogo: serverlogo,
                    ServerBanner: serverbanner,
                }
                data.Content.push(obj)
                data.save()
            }
            break;
        }
    }, catch (e) {
        const errorEmbed = new MessageEmbed()
        .setColor("RED")
        .setDescription(`⛔ Alert: ${e}`)
        return interaction.reply({embeds: [errorEmbed]});
    }
}