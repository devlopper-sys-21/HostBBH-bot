const Discord = require("discord.js");
module.exports = {
    name: 'ranksystem',
    description: "Informations about comp",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("RSL Rank System")
       .setURL("")
       .setDescription("Here you can take a look at the league ranking system and how much points for each.\n\nNormal Division :\n\n♢ Division I - 0 to 30 points\n♢ Division II - 30 points to 75 points\n♢ Division III 75 to 150 points\n\nELITE Division:\n\n♢ Elite I - 150 to 300 points\n♢ Elite II - 300 to 600 points\n♢ Elite III - 600 to 1100 points\n♢ Season Champion - 1100 points+\n\n♢ Win kos = +20 points\n♢ Win FFA Solo Box= +15 points\n♢ Win Solo Realistics = +20 points\n♢ Win Duo Realistics = +15 points each")
       .setThumbnail("https://media.discordapp.net/attachments/602938015261655059/866299626289102908/BBH_LEAGUE_LOGO_REBRANDED.png?width=449&height=449")
       .setImage("https://media.discordapp.net/attachments/602938015261655059/866331078259769404/rank_system.png?width=798&height=449")
       .setFooter("Ranking system")
       .setColor("#ff2638")
       .setURL("")

       message.channel.send(embed)
    }
}