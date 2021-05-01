const Discord = require("discord.js");
module.exports = {
    name: 'help',
    description: "Helping a user",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Help")
       .setURL("")
       .setDescription(`Hello ${message.member}\nWelcome to BBH! This is a Strucid League and a GFX/VFX Store.\nTo view all commands type >commands\n`)
       .setImage("")
       .setFooter(`Help command`)
       .setColor("#00bfff")

       message.channel.send(embed)
    }
}