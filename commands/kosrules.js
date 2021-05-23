const Discord = require("discord.js");
module.exports = {
    name: 'kosrules',
    description: "Rules for kos scrims",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("KOS scrims rules")
       .setURL("")
       .setDescription("**How to win a kos game**\n\n *You need to be the first person with 15 kills*\n\n__**Banned Weapons**__\n\n*The following weapons are not allowed in kos scrims:*\n\n♢ Explosive guns\n♢ SMG 101\n♢ Tactical SMG\n♢ Drum Gun\n♢ Minigun\n♢ Burst SMG\n♢ Machine Pistol\n♢Heavy Sniper\n♢ Semi-Auto Sniper\n♢ Snowball launcher\n♢ Ironman hands\n♢ Flamethrower\n♢ AUG, Burst Assualt Rifle (not the famas!)\n♢ Scoped Assault Rifle\n♢ Silenced Pistol.\n\n__**You need to follow theses rules no matter what:**__\n\n♢ No Ghosting, ghost peaking\n♢ No Bloom glitches\n♢ No Fusing\n♢ 1 ms crouch peeking is banned.\n♢ Hacks are not allowed\n♢ No Boombox or Radio playing.\n♢ Alts account are not allowed! we define alts as account made the same week or not verified with the Bloxlink bot in the server.\n\n")
       .setImage("https://media.discordapp.net/attachments/842914941290807355/842928428986269706/KOS_SCRIMS_SEASON_2.png?width=797&height=449")
       .setFooter(`kos scrims rules`)
       .setColor("#69edff")

       message.channel.send(embed)
    }
}