const Discord = require("discord.js");
const fs = require('fs');
const { Server } = require("http");



    module.exports = {
        name: 'hostbox',
        description: "Hosting ffa box",
        execute(message, args){
            const scrimMessage = args.join(' ');
            message.delete().catch(err => console.log(err));
           embed = new Discord.MessageEmbed()
           .setTitle("FFA Solo Box Scrims")
           .setURL("")
           .setDescription(`** Before joining make sure to read the rules for FFA BOX scrims here <#827300995498377246> .**\n \n**Hosted by** ${message.member} \n \n**⏳ Time to join : 2 minutes**\n \n**🥇 Winning points : 15 points **\n \n**🔎 Url :** ` + scrimMessage)
           .setFooter(``)
           .setColor("#69edff")
           .setImage("https://media.discordapp.net/attachments/602938015261655059/866312854750625802/boxfights_scrims.png")
    
    
           
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