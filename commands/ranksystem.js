const Discord = require("discord.js");
module.exports = {
    name: 'ranksystem',
    description: "Informations about comp",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("BBH League")
       .setURL("")
       .setDescription("Here you can take a look at the league ranking system and how much points for each.\n\nNormal Division :\n\n♢ Bronze 0 to 50 points\n♢ Silver 50 points to 100 points\n♢ Gold 100 to 250 points\n♢ Platinum 250 to 400 points\n\nELITE Division:\n\n♢ Diamond 400 to 600 points\n♢ Master 600 to 950 points\n♢ Champion 950+ points\n If you get Champion you can dm Oxzify to get 50 robux.\n\n♢ Win kos = 20 points\n♢ Win FFA Solo Box= 15 points\n♢ Win FFA Duo Box = 10 points each \n♢ Win Solo Scrim = 20 points\n♢ Win Duo Scrim = 15 points each\n♢ Win Trio Scrim = 10 points each\n\n**Additional info:** Everybody in normal divison will play on normal tournaments, and ELITE division will be on elite tournaments.")
       .setThumbnail("https://images-ext-1.discordapp.net/external/tKdc9-U2qHMr07soKs43R7Xak6ZQ_VV_bCt1IGxp0Z0/%3Fwidth%3D389%26height%3D345/https/media.discordapp.net/attachments/786777556476624957/845779764019200007/unknown.png?width=350&height=310")
       .setImage("https://media.discordapp.net/attachments/842914941290807355/842928415375622175/Ranking_system_season_2.png?width=797&height=449")
       .setFooter("Ranking system season 1")
       .setColor("#6d37fa")
       .setURL("")

       message.channel.send(embed)
    }
}