const Discord = require("discord.js");
const fs = require('fs');



    module.exports = {
        name: 'hosttrio',
        description: "host Trio scrims",
        execute(message, args){
            const scrimMessage = args.join(' ');
            message.delete().catch(err => console.log(err));
           embed = new Discord.MessageEmbed()
           .setTitle("Trio box scrim")
           .setURL("")
           .setDescription(`** Before joining make sure to read the rules for Solo box scrims here <#827300995498377246> .**\n \n**Hosted by** ${message.member} \n \n**⏳ Time to join : 2 minutes**\n \n**🥇 Winning points : 10 each**\n \n**🔎 Url :** ` + scrimMessage  )
           .setFooter(`new scrim created ✔`)
           .setColor("#69edff")
           .setImage("https://images-ext-2.discordapp.net/external/84tM1PiaOJ6WPSlRpnn9derMThlVVLMKMxd3gopfo78/%3Fwidth%3D797%26height%3D449/https/media.discordapp.net/attachments/842914941290807355/842928405079261214/BOX_SCRIMS_SEASON_2.png?width=717&height=404")
    
           const hostchannel = message.client.channels.cache.get("842914941290807348")
    
           if (message.member.roles.cache.has('842914940493889580')) {
            hostchannel.send(embed)
            if (message.member.roles.cache.has("842914940493889580")) {
                hostchannel.send("<@&842914940461252664>")
            }
           }
           else {
            message.channel.send("You don't have the scrim host role to host that!");
        }

    }

}