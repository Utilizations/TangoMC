const config = require("../../../../Config");
const Discord = require("discord.js")
const db = require("../../Structures/Models/ClaimDB");

module.exports = {
    name : 'ip',
    run : async(client, interaction, container) => {
        const { guild, member} = interaction;
        interaction.reply({content: "play.AhertMC.net", ephemeral: true})

    }
}