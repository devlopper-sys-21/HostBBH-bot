const Discord = require("discord.js");
const fs = require('fs');



	module.exports = {
        name: 'hostsolorealistics',
        description: "host duo box scrims",
        execute(message, args){
            const scrimMessage = args.join(' ');
            message.delete().catch(err => console.log(err));
           embed = new Discord.MessageEmbed()
           .setTitle("Solo realistics scrim")
           .setURL("")
           .setDescription(`** Before joining make sure to read the rules for Duo box scrims here <#827300995498377246> **\n \n**Hosted by** ${message.member} \n \n**⏳ Time to join : 2 minutes**\n \n**🥇 Winning points : 20**\n \n**🔎 Url :** ` + scrimMessage  )
           .setFooter(``)
           .setColor("#69edff")
           .setImage("https://media.discordapp.net/attachments/602938015261655059/866338981968478228/realistics.png?width=798&height=449")
    
    
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