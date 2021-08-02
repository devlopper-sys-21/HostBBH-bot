const Discord = require("discord.js");
const fs = require('fs');



    module.exports = {
        name: 'hostduorotations',
        description: "host solo box scrims",
        execute(message, args){
            const scrimMessage = args.join(' ');
            message.delete().catch(err => console.log(err));
           embed = new Discord.MessageEmbed()
           .setTitle("Duo Rotations scrim")
           .setURL("")
           .setDescription(`** Before joining make sure to read the rules for duo Rotations scrims here <#827300995498377246> .**\n \n**Hosted by** ${message.member} \n \n**⏳ Time to join : 2 minutes**\n \n**🥇 Winning points : 15 points each**\n \n**🔎 Url :** ` + scrimMessage  )
           .setFooter(`new scrim created ✔`)
           .setColor("#2af75a")
           .setImage("https://media.discordapp.net/attachments/602938015261655059/869547577870262282/ROTATIONSSCRIMS.PNG?width=798&height=449")
    
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