const Discord = require("discord.js");
module.exports = {
    name: 'compinfo',
    description: "Informations about comp",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("BBH League")
       .setURL("")
       .setDescription("Hi and welcome to BBH league!\nWe work with a season format wich will take aproximatly 1 or 2 month.\nEach start of a season will be announced the schedule, the qualifiers format, the prize pool and ways that you can compete to win prizes.")
       .setThumbnail("https://images-ext-1.discordapp.net/external/tKdc9-U2qHMr07soKs43R7Xak6ZQ_VV_bCt1IGxp0Z0/%3Fwidth%3D389%26height%3D345/https/media.discordapp.net/attachments/786777556476624957/845779764019200007/unknown.png?width=350&height=310")
       .setImage("https://media.discordapp.net/attachments/818901790593777745/845781087946145822/bbh_season_2_logo.png?width=797&height=449")
       .setFooter("")
       .setColor("#69edff")
       .setURL("")

       message.channel.send(embed)
    }
}