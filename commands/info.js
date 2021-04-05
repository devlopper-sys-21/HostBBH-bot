const Discord = require("discord.js");
module.exports = {
    name: 'info',
    description: "Informations about BBH",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Informations")
       .setURL("")
       .setDescription("Hi, and welcome to **BBH**, runs by Jamez and Oxzify. We are a __Strucid League__ and also a __GFX/VFX store__! ")
       .setThumbnail("https://media.discordapp.net/attachments/821483287037870130/822819239517618176/BBH_logo_1.png?width=442&height=442")
       .setImage("https://media.discordapp.net/attachments/770786597418958889/822985170260066304/informations.png?width=960&height=360")

       .addField("__Competetive League__", "*BHH Strucid League* was created to help grow the competetive scene and so better the community. for more informations about the league you can go to #CompInfos channel.")
       .addField("__GFX/VFX Store__", "Yes, **BBH** has also a *GFX/VFX store*. We have __cheap prices__ and __fast service__. We got very talented workers and that also worked for many big content creators. If you are interested in our services you can go check out #Store-info channel.")
       .setFooter("Official BBH infos 2021")
       .setColor("#fe4b4b")

       message.channel.send(embed)
    }
}