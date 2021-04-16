const Discord = require("discord.js");
module.exports = {
    name: 'soloandduoscrimrules',
    description: "Rules for solo and duo scrims.",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Solo and Duo scrims rules")
       .setURL("")
       .setDescription("__**Banned Weapons**__\n\n*The following weapons are not allowed in Solo and Duo scrims:*\n\n♢ Explosive guns\n♢ SMG 101\n♢ Tactical SMG\n♢ Drum Gun\n♢ Minigun\n♢ Burst SMG\n♢ Machine Pistol\n♢Heavy Sniper\n♢ Semi-Auto Sniper\n♢ Snowball launcher\n♢ Ironman hands\n♢ Flamethrower\n♢ AUG, Burst Assualt Rifle (not the famas!)\n♢ Scoped Assault Rifle\n♢ Silenced Pistol.\n\n__**You need to follow theses rules no matter what:**__\n\n♢ No Ghosting, ghost peaking\n♢ No Bloom glitches\n♢ No Fusing\n♢ 1 ms crouch peeking is banned.\nHacks are not allowed!\n♢ Being in the side of the map is prohibited. If you are on it just get out of it as soon as possible without shooting someone. If you camp in there you will get kicked!")
       .setImage("https://media.discordapp.net/attachments/625351405724631050/827989017353912350/scrimmsss.png?width=786&height=442")
       .setFooter(`FFA box scrims rules`)
       .setColor("#00bfff")

       message.channel.send(embed)
    }
}