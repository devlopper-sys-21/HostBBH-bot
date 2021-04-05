const Discord = require("discord.js");
module.exports = {
    name: 'storeinfo',
    description: "Informations about BBH GFX/VFX store",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("GFX/VFX Store INFO")
       .setURL("")
       .setDescription("Welcome to BBH GFX/VFX Store! We basicly can do Thumbnails and edit videos (especially montages). Prices are displayed in #♢︱prices .\nDown bellow you can get more information about how to order.")
       .setThumbnail("https://media.discordapp.net/attachments/821483287037870130/822819239517618176/BBH_logo_1.png?width=442&height=442")
       .setImage("https://media.discordapp.net/attachments/625351405724631050/823005784698519582/unknown.png")
       .addField("How do I order?", "Well it's simple! You just need to go to this channel #♢︱order-here and then type in -ticket open [Your name]. A new channel gets made wich only you and the workers can chat in! And then you want to explain what do you want with details.")
       .setFooter("Official BBH GFX/VFX Store INFO 2021")
       .setColor("#7d91f7")

       message.channel.send(embed)
    }
}