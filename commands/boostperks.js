const Discord = require("discord.js");
module.exports = {
    name: 'boostperks',
    description: "Boosting perks for boosting the server",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Server Boosting Perks")
       .setURL("")
       .setDescription("Thanks for boosting BBH since you did this generous act we will reward you ;)\n\nTheses are the boosting perks for BBH:\n1x boost = Booster Role, Custom command, Pictures perms, you can advertise the booster advertisement channel and have access to the booster chat.\n\n3x boost- You will have cool kids role, 10k dank memer, -15% of the price for all in the gfx/vfx store and all the perks above.\n\n8x boost- all the perks above, shoutout on server and youtube channel, Partner your server with no members limit, have respected role and mega booster role.")
       .setImage("https://images-ext-1.discordapp.net/external/Y_A_jHnbR1Q6VMRUjheur5YlZy9jie1KIJqxie3-qSQ/%3Fitemid%3D14289229/https/media1.tenor.com/images/c1ee5ae3e9db6a5a3536f4232e946155/tenor.gif?width=500&height=282")
       .setFooter(`Boosting perks 2021`)
       .setColor("#FC8FFF")
    

       message.channel.send(embed)
    }
}