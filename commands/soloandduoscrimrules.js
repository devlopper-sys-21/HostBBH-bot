const Discord = require("discord.js");
module.exports = {
    name: 'soloandduoscrimrules',
    description: "Rules for solo and duo scrims.",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Solo, Duo and Trio scrims rules")
       .setURL("")
       .setDescription("**How to win a solo or duo or Trio box scrim**\n\n *You need to be the last person or duo alive!*\n\n__**Banned Weapons**__\n\n*The following weapons are not allowed in Solo and Duo scrims:*\n\n♢ Explosive guns\n♢ SMG 101\n♢ Tactical SMG\n♢ Drum Gun\n♢ Minigun\n♢ Burst SMG\n♢ Machine Pistol\n♢Heavy Sniper\n♢ Semi-Auto Sniper\n♢ Snowball launcher\n♢ Ironman hands\n♢ Flamethrower\n♢ AUG, Burst Assualt Rifle (not the famas!)\n♢ Scoped Assault Rifle\n♢ Hunting rifle\n♢ Silenced Pistol.\n\n__**You need to follow theses rules no matter what:**__\n\n♢ No Ghosting, ghost peaking\n♢ No Bloom glitches\n♢ No Fusing\n♢ 1 ms crouch peeking is banned.\n♢ Hacks are not allowed!\n♢ Being in the side of the map is prohibited. If you are on it just get out of it as soon as possible without shooting someone. If you camp in there you will get kicked!\n♢ Going underwater in the 1v1 map will get you kicked!\n♢ No Boombox or Radio playing.\n♢ Alts account are not allowed! we define alts as account made the same week or not verified with the Bloxlink bot in the server.\n")
       .setImage("https://media.discordapp.net/attachments/842914941290807355/842928405079261214/BOX_SCRIMS_SEASON_2.png?width=797&height=449")
       .setFooter(`FFA box scrims rules`)
       .setColor("#69edff")

       message.channel.send(embed)
    }
}