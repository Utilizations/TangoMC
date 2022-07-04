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
                },
                {
                    name: "ticketopen",
                    description: "Set the ticket open-channel",
                },
                {
                    name: "ticketlogs",
                    description: "Set the ticket logs channel.",
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
                },
                {
                    name: "welcomechannel",
                    description: "Set the welcome channel.",
                },
                {
                    name: "serverlogo",
                    description: "Set the servers logo.",
                },
                {
                    name: "serverbanner",
                    description: "Set the servers banner.",
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
        const ticketcat = interaction.options.getString("ticketcategory");
        const ticketopen = interaction.options.getString("ticketopen");
        const ticketlog = interaction.options.getString("ticketlogs");
        const sugchannel = interaction.options.getString("suggestionchannel");
        const logchannel = interaction.options.getString("logchannel");
        const welcomechannel = interaction.options.getString("welcomechannel");
        const serverlogo = interaction.options.getString("serverlogo");
        const serverbanner = interaction.options.getString("serverbanner");

        const Sub = interaction.options.getSubcommand();

        switch(Sub) {
            case "tickets" : {

            }
        }
    }
}