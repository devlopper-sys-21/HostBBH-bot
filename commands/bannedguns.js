const Discord = require("discord.js");
module.exports = {
    name: 'bannedguns',
    description: "Rules for kos scrims",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Banned Guns")
       .setURL("")
       .setDescription(`__**The following are guns that can't be used in any scrims, if your using you will be permkicked or blacklisted.**__\n\n♢ Combat Burst (AUG)
       ♢ Burst AR (FAMAS)
       ♢ RPG
       ♢ Nerf Blaster
       ♢ Bolt Action Sniper
       ♢ Drum Gun
       ♢ Assault SMG
       ♢ SMG
       ♢ Suppressed SMG
       ♢ Pistol`)
       .setImage("https://media.discordapp.net/attachments/602938015261655059/869557978787889202/Banned_Guns.png?width=798&height=449")
       .setFooter(`Last updated : 2020/07/27`)
       .setColor("#ff2929")

       message.channel.send(embed)
    }
}