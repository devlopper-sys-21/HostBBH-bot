const Discord = require("discord.js");
module.exports = {
    name: 'verifyinfo',
    description: "Tell users how to verify and get access to the server",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Verify info!")
       .setURL("")
       .setDescription("This is the last step to get in the server!\n\nYou need to react to this message if you agree with our rules!\nIt's important to respect them!\n\nWhen you react you will access the server. If the verifcation dosent work you can dm a moderator or admin.")
       .setImage("https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif")
       .setFooter(`Verify to Team BBH 2021`)
       .setColor("#9ce98d")

       message.channel.send(embed)
    }
}