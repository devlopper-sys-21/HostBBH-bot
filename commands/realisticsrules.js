const Discord = require("discord.js");
module.exports = {
    name: 'realisticsrules',
    description: "BBH Season 2",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Solo and Duo Realistics scrims rules")
       .setURL("")
       .setDescription(`**How to win a realistic game**\n\n *You need to be the last person or duo alive*\nRealistics is like kos but you can't respawn\nYou can't kill people from the start, the host will tell you when.\nMake sure at the start to grab a lot of materials for the rest of the game!\n You can ONLY use Assault Rifle (AR) and Pump Shotgun\n\n Respec theses rules no matter what:**__\n\n♢ No Ghosting, ghost peaking\n♢ No Bloom Glitches\n♢ Alts accounts are not allowed. You should be on your main account or get verified with bloxlink bot in the server. (Must be at least 1 month)\n♢ Votekicking players in the scrim or shooting people at the start of the game is not allowed and you will be blacklisted for griffing scrims.`)
       .setImage("https://cdn.discordapp.com/attachments/602938015261655059/866338981968478228/realistics.png")
       .setFooter(``)
       .setColor("#30e7ff")

       message.channel.send(embed)
    }
}