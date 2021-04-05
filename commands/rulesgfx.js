const Discord = require("discord.js");
module.exports = {
    name: 'rulesgfx',
    description: "Rules",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Rules")
       .setURL("")
       .setDescription("SERVER RULES\n\nhttps://discord.com/terms\nhttps://discord.com/guidelines\n\n**Regulation 1: Respect.**\nIn this server, we expect that each member of our community treat others and staff members with utmost respect. Though you may have different opinions on a subject, we ask that you remain civil.\n\n**Regulation 2: Spamming.**\nWe define (spamming) as sending multiple messages in a short period of time. Depending on the gravity of the case, it may lead to a warn/mute\n\n**Regulation 3: Advertising.**\nWe define (advertising) as sending links to other servers, or sending links to YouTube or other media channels. If you carry this out without permission, you will be muted.\n\n**Regulation 4: Filter Bypassing.**\nWe use **Dyno** bot to help enforce our regulations. The bot has an advertisement and spam detection. Bypassing, or attempting to bypass will warrant a sanction\n\n**Regulation 5: Misusage of Bots.**\nMisusing any of our bots in a way that is disruptive to staff or others is not allowed. We ask that all commands go into the bot commands channel.\n\n**Regulation 6: Pornography.**\nAny sort of pornography or sexual references will be moderated heavily, and may result in an immediate ban in majority of the cases.")
       .setFooter(`Official rules`)
       .setColor("#ffcaa7")
       .setImage("https://media.discordapp.net/attachments/774646048424722465/780066072136122388/Rules-Fire.png?width=1439&height=647")

       message.channel.send(embed)
    }
}