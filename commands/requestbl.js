const Discord = require("discord.js");
module.exports = {
    name: 'requestbl',
    description: "Request someone to get blacklisted",
    execute(message, args){
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err))
        const hostchannel = message.client.channels.cache.get("850554809442238486")
        hostchannel.send(sayMessage)
        message.channel.send("Thank you, the staff will be looking more into this player to see if he hacks or not.")
    }
}

