const Discord = require("discord.js");

const fs = require('fs');


    module.exports = {
        name: 'hostkos',
        description: "hostkos",
        execute(message, args){
            const scrimMessage = args.join(' ');
            message.delete().catch(err => console.log(err));
           embed = new Discord.MessageEmbed()
           .setTitle("Kos scrim")
           .setURL("")
           .setDescription(`** Before joining make sure to read the rules for Kos scrims here 🎯︱scrims-rules .**\n \n**Hosted by** ${message.member} \n \n**Time to join : 2 minutes**\n \n**Winning points : 20**\n \n**Url :** ` + scrimMessage  )
           .setFooter(`new scrim created ✔`)
           .setColor("#FF0000")
           .setImage("https://media.discordapp.net/attachments/625351405724631050/827988767662014494/kos_bbh.png?width=786&height=442")
    
           const hostchannel = message.client.channels.cache.get("827891361700904970")
    
           if (message.member.roles.cache.has('825153810258984970')) {
            hostchannel.send(embed)
           }
           else {
            message.channel.send("You don't have the scrim host role to host that!");
        }
        hostchannel.send("<@&823886415644852245>")
        }
    }