const Discord = require("discord.js");
module.exports = {
    name: 'info',
    description: "Informations about BBH",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Informations")
       .setURL("")
       .setDescription("Hi, and welcome to **BBH**, runs by Jamez and Oxzify. We are a __Strucid League__ and also a __GFX/VFX store__! ")
       .setThumbnail("https://media.discordapp.net/attachments/786777556476624957/845779764019200007/unknown.png?width=389&height=345")
       .setImage("https://media.discordapp.net/attachments/786777556476624957/845780276147912745/BBH_INFO_SEASON_2.png?width=797&height=449")

       .addField("__Competitive League__", "*BHH Strucid League* was created to help grow the competitive scene and so better the community. for more informations about the league you can go to #CompInfos channel.")
       .addField("__GFX/VFX Store__", "Yes, **BBH** has also a *GFX/VFX store*. We have __cheap prices__ and __fast service__. We got very talented workers and that also worked for many big content creators. If you are interested in our services you can go check out #Store-info channel.")
       .setFooter("Official BBH infos 2021")
       .setColor("#69edff")

       message.channel.send(embed)
    }
  
}