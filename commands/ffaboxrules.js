const Discord = require("discord.js");
module.exports = {
    name: 'ffaboxrules',
    description: "Rules for FFA box scrims",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("FFA solo and duo Box scrims rules")
       .setURL("")
       .setDescription("**How to win a ffa solo or duo box game**\n\n *You need to be the last person or duo alive!*\n\n♢ Pump and Ar are the only guns allowed(or perm kick)\n♢ The box is 12x12\n♢ Respawn after died = perm kick from the server (only if the host said respawn)\n♢ Griffing = permkick\n♢ Don't be toxic when someone kill you.\n♢ Hacks are not allowed!\n♢ No Boombox or Radio playing.\n♢ Alts account are not allowed! we define alts as account made the same week or not verified with the Bloxlink bot in the server.\n")
       .setImage("https://media.discordapp.net/attachments/842914941290807355/842928429992771594/ffa_box_scrims_season_2.png?width=797&height=449")
       .setFooter(`FFA box scrims rules`)
       .setColor("#69edff")

       message.channel.send(embed)
    }
}