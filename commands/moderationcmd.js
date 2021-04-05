const Discord = require("discord.js");
module.exports = {
    name: 'moderationcmd',
    description: "Listing all moderations commands available with this bot.",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Moderation commands")
       .setURL("")
       .setDescription("Here are all commands available for now... \n\n >kick [user]\n>ban [user]\n")
       .setFooter(``)
       .setColor("#00bfff")

       message.channel.send(embed)
    }
}