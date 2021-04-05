const Discord = require("discord.js");
module.exports = {
    name: 'partnershipinfo',
    description: "partnership info",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Partnerships informations")
       .setURL("")
       .setDescription("")
       .setFooter(`Official partnerships informations 2021`)
       .setColor("#00bfff")

       message.channel.send(embed)
    }
}