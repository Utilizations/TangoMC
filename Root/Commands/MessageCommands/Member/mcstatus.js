const Discord = require("discord.js");
const config = require("../../../../Config");
const util = require("minecraft-server-util");
const options = {
    timeout: 1000 * 5, // timeout in milliseconds
    enableSRV: true // SRV record lookup
};

module.exports = {
    name: "mcstatus",
    run: async(client, message, args, container) => {
        message.delete()
        util.status('51.195.224.70:', 7000, options)
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

    }
}