const Discord = require("discord.js");
module.exports = {
    name: 'ranksystem',
    description: "Informations about comp",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("BBH League")
       .setURL("")
       .setDescription("Here you can take a look at the league ranking system and how much points for each.\n\nNormal Division :\n\n♢ Bronze 0 to 30 points\n♢ Silver 30 points to 70 points\n♢ Gold 70 to 150 points\n♢ Platinum 150 to 250 points\n\nELITE Division:\n\n♢ Diamond 250 to 450 points\n♢ Master 450 to 800 points\n♢ Champion 800+ points\n\n\n♢ Win kos = 20 points\n♢ Win FFA Box= 15 points\n♢ Win Solo Box Scrim = 20 points\n♢ Win Duo Box Scrim = 15 points each\n\n\n**Additional info:** Everybody in normal divison will play on normal tournaments, and ELITE division will be on elite tournaments.")
       .setThumbnail("https://media.discordapp.net/attachments/602938015261655059/823316478082154536/TEAM_BBH_LETS_GO.png?width=442&height=442")
       .setImage("https://media.discordapp.net/attachments/775868503587946536/825152425466920980/rankking_system_bbh.png?width=786&height=442")
       .setFooter("Ranking system season 1")
       .setColor("#6d37fa")
       .setURL("")

       message.channel.send(embed)
    }
}