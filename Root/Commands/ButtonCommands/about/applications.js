const config = require("../../../../Config");
const Discord = require("discord.js")


module.exports = {
    name : 'applications',
    run : async(client, interaction, container) => {
        const { guild, member} = interaction;
        interaction.reply({content: "---", ephemeral: true})
    }
}