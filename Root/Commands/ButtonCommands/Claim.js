const config = require("../../../Config");
const Discord = require("discord.js")
const db = require("../../Structures/Models/ClaimDB");

module.exports = {
    name : 'claim',
    userPermissions: ["MANAGE_MESSAGES"],
    run : async(client, interaction, container) => {
        const { guild, member} = interaction;
        interaction.channel.send({embeds: [new Discord.MessageEmbed().setDescription(`${interaction.member} has claimed this ticket.`)]})
        interaction.channel.permissionOverwrites.edit(config.staffRole , { VIEW_CHANNEL: false, SEND_MESSAGES: false});


        db.findOne({ GuildID: interaction.guild.id, UserID: interaction.member.id }, async (err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    GuildID: interaction.guild.id,
                    UserID: interaction.member.id,
                    Content: [
                        {
                            ExecuterID: interaction.member.id,
                            ExecuterTag: interaction.member.tag,
                            Channel: interaction.channel.name
                        }
                    ],
                })
            } else {
                const obj = {
                    ExecuterID: interaction.member.id,
                    ExecuterTag: interaction.member.tag,
                    Channel: interaction.channel.name
                }
                data.Content.push(obj)
            }
            data.save()
        });
    }
}