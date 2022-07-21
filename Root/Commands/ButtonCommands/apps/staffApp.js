const config = require("../../../../Config");
const Discord = require("discord.js")
const { createTranscript } = require("discord-html-transcripts");

module.exports = {
    name : 'staffapp',
    run : async(client, interaction, container) => {
        const modal = new Discord.Modal()
        .setCustomId('staff')
        .setTitle('Apply for Staff.')

        const IGN = new Discord.TextInputComponent()
        .setCustomId('ign1')
        .setLabel('What is your IGN.')
        .setStyle('SHORT')
        const AGE = new Discord.TextInputComponent()
        .setCustomId('age1')
        .setLabel('How old are you.')
        .setStyle('SHORT')
        const WHY = new Discord.TextInputComponent()
        .setCustomId('why1')
        .setLabel('Why doyu want to be staff')
        .setStyle('PARAGRAPH')
        const EXPERIENCE = new Discord.TextInputComponent()
        .setCustomId('experinces1')
        .setLabel('What are you experinces.')
        .setStyle('PARAGRAPH')
        const ELSE = new Discord.TextInputComponent()
        .setCustomId('else1')
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