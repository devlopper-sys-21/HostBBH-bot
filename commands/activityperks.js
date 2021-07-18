const Discord = require("discord.js");
module.exports = {
    name: 'activityperks',
    description: "Helping a user",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Perks for activity")
       .setURL("")
       .setDescription(`Here are the perks for being active, the leveling system we use is the one with Atlas bot. <@338222603829510164>\n\nLevel 5 - <@&842914940473442308>\n<@&842914940473442308> get picture perms.\n\nLevel 10 - <@&864303545184157706>\n<@&864303545184157706> get the reaction perms.\n\nLevel 20 - <@&842914940473442309>\n<@&842914940473442309> get the link and link embed perms.\n\nLevel 30 - <@&842914940473442310>\n<@&842914940473442310> can choose to add an emoji of choice in the server + get <@&842914940493889582> role`)
       .setImage("https://media.discordapp.net/attachments/602938015261655059/866299398765805579/actibity_rsl.png?width=958&height=449")
       .setFooter(``)
       .setColor("#ff4f4f")

       message.channel.send(embed)
    }
}