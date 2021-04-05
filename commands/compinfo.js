const Discord = require("discord.js");
module.exports = {
    name: 'compinfo',
    description: "Informations about comp",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("BBH League")
       .setURL("")
       .setDescription("Hi and welcome to BBH league!\nWe work with a season format wich will take aproximatly 1 or 2 month.\nEach start of a season will be announced the schedule, the qualifiers format, the prize pool and ways that you can compete to win prizes.")
       .setThumbnail("https://media.discordapp.net/attachments/602938015261655059/823316478082154536/TEAM_BBH_LETS_GO.png?width=442&height=442")
       .setImage("https://media.discordapp.net/attachments/821483287037870130/827525191814610994/BBH_leaguee.png?width=786&height=442")
       .setFooter("")
       .setColor("#6d37fa")
       .setURL("")

       message.channel.send(embed)
    }
}