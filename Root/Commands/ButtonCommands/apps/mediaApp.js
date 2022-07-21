const config = require("../../../../Config");
const Discord = require("discord.js")
const { createTranscript } = require("discord-html-transcripts");

module.exports = {
    name : 'close',
    run : async(client, interaction, container) => {
        const modal = new Discord.Modal()
        .setCustomId('media')
        .setTitle('Apply for Media')

        const IGN = new Discord.TextInputComponent()
        .setCustomId('ign2')
        .setLabel('What is your IGN?')
        .setStyle('SHORT')
        const AGE = new Discord.TextInputComponent()
        .setCustomId('age2')
        .setLabel('How old are you.')
        .setStyle('SHORT')
        const CHANNEL = new Discord.TextInputComponent()
        .setCustomId('channel')
        .setLabel('Please link your channel.')
        .setStyle('PARAGRAPH')
        const ELSE = new Discord.TextInputComponent()
        .setCustomId('else2')
        .setLabel('Anything else?')
        .setStyle('PARAGRAPH')

        const firstActionRow = new Discord.MessageActionRow().addComponents(IGN);
        const secondActionRow = new Discord.MessageActionRow().addComponents(AGE);
        const thirdActionRow = new Discord.MessageActionRow().addComponents(CHANNEL);
        const fithActionRow = new Discord.MessageActionRow().addComponents(ELSE);
		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fithActionRow);
		await interaction.showModal(modal);
    }
}