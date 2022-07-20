const chalk = require("chalk");
const Box = require("cli-box");
const mongoose = require("mongoose");
const { database } = require("../../Config");
const { Collection } = require("discord.js")

module.exports = {
    name: "ready",
    once: true,
    run: async(client) => {
        client.user.setActivity('AzaleaMC.', {
            type: `WATCHING`,
        })
        client.guilds.cache.forEach(guild => {
            guild.invites.fetch()
                .then(invites => {
                    console.log("INVITES CACHED");
                    const codeUses = new Map();
                    invites.each(inv => codeUses.set(inv.code, inv.uses));
    
                    guildInvites.set(guild.id, codeUses);
                })
                .catch(err => {
                    console.log("OnReady Error:", err)
                })
        })
          
        const ClientBox = new Box({
            w: Math.floor(client.user.tag.length + 27 ),
            h: 7,
            stringify: false,
            marks: {
              nw: '╭',
              n: '─',
              ne: '╮',
              e: '│',
              se: '╯',
              s: '─',
              sw: '╰',
              w: '│'
            },
            hAlign: 'left',
          }, `C L I E N T   I N F O R M A T I O N

Client Details    ::    ${client.user.tag}
Guilds Count      ::    ${client.guilds.cache.size}
User Count        ::    ${client.users.cache.size}
NodeJS Version    ::    ${process.version}
`).stringify()

        const CommandsBox = new Box({
            w: Math.floor(`Initiating ${client.commands.messageCommands.aliases.size} messageCommands Aliases.`.length + 37),
            h: 8,
            stringify: false,
            marks: {
                nw: '╭',
                n: '─',
                ne: '╮',
                e: '│',
                se: '╯',
                s: '─',
                sw: '╰',
                w: '│'
            },
            hAlign: "left",
        }, `C O M M A N D S   I N F O R M A T I O N

MessageCommands            ::    Initiating ${client.commands.messageCommands.size} messageCommands.
MessageCommands Aliases    ::    Initiating ${client.commands.messageCommands.aliases.size} messageCommands Aliases.
SlashCommands              ::    Initiating ${client.commands.slashCommands.size} slashCommands.
SelectMenus                ::    Initiating ${client.commands.selectMenus.size} selectMenus.
ContextMenus               ::    Initiating ${client.commands.contextMenus.size} contextMenus.
ButtonCommands             ::    Initiating ${client.commands.buttonCommands.size} buttonCommands.
Client Events              ::    Initiating ${client.events.size} events.
`).stringify()

        console.log(chalk.bold.greenBright(ClientBox))
        console.log(chalk.bold.blueBright(CommandsBox))

        if(!database) return;
        mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then (() => {
            console.log("The Client is now connected to the database!")
        }).catch((err) => {
            console.log(err)
        })

        client.on('inviteCreate', async invite => {
            const invites = await invite.guild.invites.fetch();
        
            const codeUses = new Map();
            invites.each(inv => codeUses.set(inv.code, inv.uses));
        
            guildInvites.set(invite.guild.id, codeUses);
        })
        
        client.on('guildMemberAdd', async member => {
            const cachedInvites = guildInvites.get(member.guild.id)
            const newInvites = await member.guild.invites.fetch();
            try {
                const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code) < inv.uses);
                console.log("Cached", [...cachedInvites.keys()])
                console.log("New", [...newInvites.values()].map(inv => inv.code))
                console.log("Used", usedInvite)
                console.log(`The code ${usedInvite.code} was just used by ${member.user.username}.`)
            } catch (err) {
                console.log("OnGuildMemberAdd Error:", err)
            }
        
            newInvites.each(inv => cachedInvites.set(inv.code, inv.uses));
            guildInvites.set(member.guild.id, cachedInvites);
        });

    }

    
}
