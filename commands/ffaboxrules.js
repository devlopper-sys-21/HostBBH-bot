const Discord = require("discord.js");
module.exports = {
    name: 'ffaboxrules',
    description: "Rules for FFA box scrims",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("FFA solo and duo Box scrims rules")
       .setURL("")
       .setDescription("**How to win a ffa solo**\n\n *You need to be the last person in the box alive!*\n\n♢ Assualt Rifle (AR) and Pump Shotgun are the only guns allowed(or perm kick)\n♢ The box is gonna be build in desert map\n♢ Respawn after died = perm kick from the server (only if the host said respawn)\n♢ Griffing = permkick\n♢ Don't be toxic when someone kill you.\n♢ Hacks are not allowed!\n♢ No Boombox or Radio playing.\n♢ Alts account are not allowed! we define alts as account made within a month and you should be verified with bloxlink\n")
       .setImage("https://media.discordapp.net/attachments/602938015261655059/866312854750625802/boxfights_scrims.png")
       .setFooter(`FFA box scrims rules`)
       .setColor("#ff3060")

       message.channel.send(embed)
    }
}