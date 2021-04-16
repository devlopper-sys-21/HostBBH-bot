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
           .setTitle("FFA Box Scrims")
           .setURL("")
           .setDescription(`** Before joining make sure to read the rules for FFA BOX scrims here #🎯︱scrims-rules .**\n \n**Hosted by** ${message.member} \n \n**Time to join : 2 minutes**\n \n**Winning points : 15 **\n \n**Url :** ` + scrimMessage)
           .setFooter(``)
           .setColor("#FF0000")
           .setImage("")
    
           const hostchannel = message.client.channels.cache.get("827891361700904970")
    
           
           if (message.member.roles.cache.has('825153810258984970')) {
            hostchannel.send(embed)
           }
           else {
            message.channel.send("You don't have the scrim host role to host that!");
        }
        hostchannel.send("<@&823697645238878218>")
    
        }
    }
