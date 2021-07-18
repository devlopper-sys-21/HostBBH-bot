const Discord = require("discord.js");
module.exports = {
    name: 'kosrules',
    description: "Rules for kos scrims",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("KOS scrims rules")
       .setURL("")
       .setDescription("**How to win a kos game**\n\n *You need to be the first person with 15 kills*\n\n__**Banned Weapons**__\n\n*The following weapons are not allowed in kos scrims:*\n\n♢ RPG\n♢ Nerf Blaster\n♢ Bolt Action Sniper\n♢ Drum Gun\n♢ Assault SMG\n♢ SMG\n♢ Suppressed SMG\n\n__**You need to follow theses rules no matter what:**__\n\n♢ No Ghosting, ghost peaking\n♢ No Bloom Glitches\n♢ Alts accounts are not allowed. You should be on your main account or get verified with bloxlink bot in the server. (Must be at least 1 month)\n♢ Votekicking players in the scrim is not allowed and you will be blacklisted for griffing scrims.")
       .setImage("https://media.discordapp.net/attachments/602938015261655059/866311580601942036/kos_scrims.png?width=798&height=449")
       .setFooter(`kos scrims rules`)
       .setColor("#ff3060")

       message.channel.send(embed)
    }
}