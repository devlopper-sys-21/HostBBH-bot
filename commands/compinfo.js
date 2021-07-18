const Discord = require("discord.js");
module.exports = {
    name: 'compinfo',
    description: "Informations about comp",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("RSL League")
       .setURL("")
       .setDescription("Hi and welcome to RSL league!\nStrucid Chapter 2 is officially released! With this new update comes new mechanics, builds, aim, etc… that we have to learn/adapt too. This chapter definitely has its perks and upsides, however, chapter 2 also has its flaws and downsides.\nWith RSL we try our best to make Chapter 2 a competitive and fun place.")
       .setThumbnail("https://media.discordapp.net/attachments/602938015261655059/866299626289102908/BBH_LEAGUE_LOGO_REBRANDED.png?width=449&height=449")
       .setImage("https://media.discordapp.net/attachments/602938015261655059/866304247918624808/competitive_rsl.png?width=958&height=449")
       .setFooter("")
       .setColor("#ff3078")
       .setURL("")

       message.channel.send(embed)
    }
}