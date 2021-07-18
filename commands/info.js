const Discord = require("discord.js");
module.exports = {
    name: 'info',
    description: "Informations about BBH",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Informations")
       .setURL("")
       .setDescription("Hi, and welcome to **RSL**, runs by Oxzify. We are a __Strucid League__ !")
       .setThumbnail("https://media.discordapp.net/attachments/602938015261655059/866299626289102908/BBH_LEAGUE_LOGO_REBRANDED.png?width=449&height=449")
       .setImage("")

       message.channel.send(embed)
    }
  
}