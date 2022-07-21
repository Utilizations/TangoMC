const config = require("../../../Config");
const Discord = require("discord.js")
const { createTranscript } = require("discord-html-transcripts");

module.exports = {
    name : 'close',
    run : async(client, interaction, container) => {
        const modal = new Discord.Modal()
        .setCustomId('developer')
        .setTitle('Apply for developer.')

        const IGN = new Discord.TextInputComponent()
        .setCustomId('ign3')
        .setLabel('What is your IGN?')
        .setStyle('SHORT')
        const AGE = new Discord.TextInputComponent()
        .setCustomId('age3')
        .setLabel('How old are you?')
        .setStyle('SHORT')
        const WHY = new Discord.TextInputComponent()
        .setCustomId('why3')
        .setLabel('WHy should we accept you?')
        .setStyle('PARAGRAPH')
        const EXPERIENCE = new Discord.TextInputComponent()
        .setCustomId('experience3')
        .setLabel('What is your previous work?')
        .setStyle('PARAGRAPH')
        const ELSE = new Discord.TextInputComponent()
        .setCustomId('else3')
        .setLabel('Anything else?')
        .setStyle('PARAGRAPH')

        const firstActionRow = new Discord.MessageActionRow().addComponents(IGN);
        const secondActionRow = new Discord.MessageActionRow().addComponents(AGE);
        const thirdActionRow = new Discord.MessageActionRow().addComponents(WHY);
        const forthActionRow = new Discord.MessageActionRow().addComponents(EXPERIENCE);
        const fithActionRow = new Discord.MessageActionRow().addComponents(ELSE);
		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, forthActionRow, fithActionRow);
		await interaction.showModal(modal);
    }
}