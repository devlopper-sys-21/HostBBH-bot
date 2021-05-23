const Discord = require("discord.js");
module.exports = {
    name: 'commands',
    description: "Listing all commands available with this bot.",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Commands")
       .setURL("")
       .setDescription("Here are all commands available for now... \n\n >commands\n>help\n>moderationcmd\n")
       .setFooter(``)
       .setColor("#69edff")

       message.channel.send(embed)
    }
}