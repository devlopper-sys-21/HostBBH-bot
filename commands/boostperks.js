const Discord = require("discord.js");
module.exports = {
    name: 'boostperks',
    description: "Boosting perks for boosting the server",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle(":cyclone: Server Boosting Perks")
       .setURL("")
       .setDescription(":crystal_ball: Boosting BBH will let you unlock perks\n\n1x boost: \n♢ Booster role\n♢ Custom command\n♢ Picture perms\n♢ Get access to booster voice channel\n\n2x boosts: \n♢ Custom role (above booster role)\n♢ Choose an emoji of your choice to add in the server\n\n6x boosts:\n♢ Use text to speech in general chat\n♢ you can react in general chat\n")
       .setImage("https://media.discordapp.net/attachments/602938015261655059/856966746095222784/perks_for_boosting.png?width=960&height=269")
       .setFooter(`Boosting perks 2021`)
       .setColor("#FC8FFF")
    

       message.channel.send(embed)
    }
}