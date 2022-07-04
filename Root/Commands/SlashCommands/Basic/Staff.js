const { CommandInteraction, MessageEmbed, GuildMember, Message } = require("discord.js");
const config = require("../../../../Config")

module.exports = {
    name: "staff",
    description: "Announce a staff update",
    permission: "MANAGE_ROLES",
    options: [
        {
            name: "add",
            description: "Promote the target",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "target",
                    description: "The target user.",
                    type: "USER",
                    required: true,
                },
                {
                    name: "moderation-role",
                    description: "Would you like to add moderation role? (Yes/No)",
                    type: "STRING",
                    required: true
                },
                {
                    name: "nickname",
                    description: "Set the rank prefix for the user. (So only put their rank e.g Manager or Helper)",
                    type: "STRING",
                    required: true
                },
                {
                    name: "to-role",
                    description: "The role added to the target.",
                    type: "ROLE",
                    required: false
                },
                {
                    name: "from-role",
                    description: "The role the target was before.",
                    type: "ROLE",
                    required: false
                },
                
            ]
        },
        {
            name: "remove",
            description: "Demote the target",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "target",
                    description: "The target user.",
                    type: "USER",
                    required: true,
                },
                {
                    name: "moderation-role",
                    description: "Would you like to add the moderation role? (Yes/No)",
                    type: "STRING",
                    required: true
                },
                {
                    name: "nickname",
                    description: "Set the rank prefix for the user. (So only put their rank e.g Manager or Helper)",
                    type: "STRING",
                    required: true
                },
                {
                    name: "to-role",
                    description: "The role added to the target.",
                    type: "ROLE",
                    required: false
                },
                {
                    name: "from-role",
                    description: "The role the target was before.",
                    type: "ROLE",
                    required: false
                },
                
            ]
        },
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        
        
        const Sub = interaction.options.getSubcommand();

        switch(Sub) {
            case "add" : {
                const memberRole = interaction.guild.roles.cache.get(config.roles.member);
                const Target = interaction.options.getMember("target");
                const addedRole = interaction.options.getRole("to-role");
                const fromRole = interaction.options.getRole("from-role") || memberRole;
                const bc = interaction.options.getString("moderation-role");
                const channel = interaction.guild.channels.cache.get("987108943895613488");
                const nickname = interaction.options.getString("nickname");
                const staff = interaction.guild.roles.cache.get(config.staffRole)


                if(Target.roles.cache.has(addedRole)) return interaction.reply({embeds: [new MessageEmbed().setColor(config.colors.embeds).setDescription(`⛔ | ${Target} already has ${addedRole}.`)]})
                
                if(bc === "No") {
                interaction.reply({embeds: [new MessageEmbed().setColor(config.colors.embeds).setDescription(`✅ |${Target} has been added to ${addedRole} from ${fromRole}`)]})
                } else {
                    interaction.reply({embeds: [new MessageEmbed().setColor(config.colors.embeds).setDescription(`✅ | ${Target} has been added to ${addedRole} from ${fromRole}\n *Assigned Moderation role.*`)]})
                    Target.roles.add(staff)
                }

                if(!fromRole === memberRole) {
                    interaction.reply({embeds: [new MessageEmbed().setColor(config.colors.embeds).setDescription(`⛔ | No roles were removed since the user was ${memberRole}`)]})
                } else {
                    Target.roles.remove(fromRole)
                }

                Target.roles.add(addedRole);
                Target.setNickname(`${nickname} » ${Target.user.username}`)
            }
            break;

            case "remove" : {
                const memberRole = interaction.guild.roles.cache.get("987108943169990673");
                const Target = interaction.options.getMember("target");
                const addedRole = interaction.options.getRole("to-role");
                const fromRole = interaction.options.getRole("from-role") || memberRole;
                const bc = interaction.options.getString("moderation-role");
                const nickname = interaction.options.getString("nickname");
                const staff = interaction.guild.roles.cache.get(config.staffRole)

                if(Target.roles.cache.has(addedRole)) return interaction.reply({embeds: [new MessageEmbed().setColor(config.colors.embeds).setDescription(`⛔ | ${Target} already has ${addedRole}.`)]})

                if(bc === "No") {
                    interaction.reply({embeds: [new MessageEmbed().setColor(config.colors.embeds).setDescription(`⛔ | ${Target} has been moved to ${addedRole} from ${fromRole}`)]})
                    } else {
                        interaction.reply({embeds: [new MessageEmbed().setColor(config.colors.embeds).setDescription(`⛔ | ${Target} has been moved to ${addedRole} from ${fromRole}\n *Assigned Moderation Role.*`)]})
                        Target.roles.add(staff)
                    }

                if(addedRole === memberRole) {
                    interaction.channel.send({embeds: [new MessageEmbed().setColor(config.colors.embeds).setDescription(`⛔ | No roles were added since the user was sent to ${memberRole}`)]})
                    Target.roles.remove(fromRole)
                    Target.roles.remove(staff)
                    Target.setNickname(`${nickname}`)
                } else {
                    Target.roles.add(addedRole)
                    Target.roles.remove(fromRole)
                    Target.setNickname(`${nickname} » ${Target.user.username}`)
                }



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