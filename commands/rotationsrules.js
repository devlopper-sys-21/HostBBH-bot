const Discord = require("discord.js");
module.exports = {
    name: 'rotationsrules',
    description: "BBH Season 2",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Solo and Duo Rotations Rules")
       .setURL("")
       .setDescription(`**How to win a rotation game**\n\n *You need to be the last person or duo alive*\n Rotations is like kos but you can't respawn\nYou can't kill people from the start, the host will tell you in what time it will start.\nMake sure at the start to grab a lot of materials for the rest of the game!\n You can ONLY use Assault Rifle (AR) and Pump Shotgun (All common rarity/ gray)\n\n Respect theses rules no matter what:**__\n\n♢ No Ghosting, ghost peaking\n♢ No Bloom Glitches\n♢ Alts accounts are not allowed. You should be on your main account or get verified with bloxlink bot in the server. (Must be at least 1 month)\n♢ Votekicking players in the scrim or shooting people at the start of the game is not allowed and you will be blacklisted for griffing scrims.\n\nHere you can see all the places for rotations : ** https://drive.google.com/drive/folders/1QjguLqIGeQjEPSvc2gkhANWCw9CjXoJP?usp=sharing **`)
       .setImage("https://media.discordapp.net/attachments/602938015261655059/869547577870262282/ROTATIONSSCRIMS.PNG?width=798&height=449")
       .setFooter(``)
       .setColor("#30e7ff")

       message.channel.send(embed)
    }
}