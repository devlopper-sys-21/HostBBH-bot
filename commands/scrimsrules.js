const Discord = require("discord.js");
module.exports = {
    name: 'scrimsrules',
    description: "BBH Season 2",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Scrims Rules")
       .setURL("")
       .setDescription(`**Below this you can find all the different types of scrims and their rules**`)
       .setImage("https://media.discordapp.net/attachments/602938015261655059/866304246025945109/scrims_rules_rsl.png?width=958&height=449")
       .setFooter(``)
       .setColor("#30fcff")

       message.channel.send(embed)
    }
}