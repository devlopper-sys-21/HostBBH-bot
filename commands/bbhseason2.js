const Discord = require("discord.js");
module.exports = {
    name: 'bbhseason2',
    description: "BBH Season 2",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Season 2")
       .setURL("")
       .setDescription(`**Welcome everybody to Season 2!**\n\n**New Changes :** \n♢ Rank system are more hard since we it was easy before.\n♢ New Type of scrims added since y'all wanted that! (trio scrims and duo ffa box)\n♢ Changed some rules for scrims. \n♢ Rewards for some high ranks in competitive.\n♢ Leaderboard command added back\n♢ ?requestbl command added, command to request for someone to get blacklisted if you think he cheats, the staff will be looking more closely into the player. Example : ?requestbl Oxzify because i think hes a hacker bla bla bla...\n Other big events and some other futures coming this season!\nThx for all the support lately without yall we couldnt made it that far! <3\n`)
       .setImage("https://images-ext-1.discordapp.net/external/JOY_3_ZRRyaoFsbt9zXSZFtIEDXKMW-LAdi2QTjjpMY/%3Fwidth%3D797%26height%3D449/https/media.discordapp.net/attachments/818901790593777745/845781087946145822/bbh_season_2_logo.png?width=717&height=404")
       .setFooter(`Season 2`)
       .setColor("#69edff")

       message.channel.send(embed)
    }
}