const Discord = require("discord.js");
module.exports = {
    name: 'ffaboxrules',
    description: "Rules for FFA box scrims",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("FFA Box scrims rules")
       .setURL("")
       .setDescription("♢ Pump and Ar are the only guns allowed(or perm kick)\n♢ The box is 12x12\n♢ Respawn after died = perm kick from the server (only if the host said respawn)\n♢ Griffing = blacklist from comp\n♢ Don't be toxic when someone kill you.")
       .setImage("https://media.discordapp.net/attachments/625351405724631050/827991782914392124/ffa_box_bbg.png?width=786&height=442")
       .setFooter(`FFA box scrims rules`)
       .setColor("#00bfff")

       message.channel.send(embed)
    }
}