const Discord = require("discord.js");
const fs = require('fs');
const { Server } = require("http");



    module.exports = {
        name: 'hostduobox',
        description: "Hosting duo ffa box",
        execute(message, args){
            const scrimMessage = args.join(' ');
            message.delete().catch(err => console.log(err));
           embed = new Discord.MessageEmbed()
           .setTitle("FFA Box Scrims")
           .setURL("")
           .setDescription(`** Before joining make sure to read the rules for FFA BOX scrims here <#827300995498377246> .**\n \n**Hosted by** ${message.member} \n \n**⏳ Time to join : 2 minutes**\n \n**🥇 Winning points : 10 points each**\n \n**🔎 Url :** ` + scrimMessage)
           .setFooter(``)
           .setColor("#69edff")
           .setImage("https://images-ext-1.discordapp.net/external/IGyeUyD9mM_wIus2RMfn9xJmWm5zPUXsQlBncE4Clh0/%3Fwidth%3D797%26height%3D449/https/media.discordapp.net/attachments/842914941290807355/842928429992771594/ffa_box_scrims_season_2.png?width=717&height=404")
    
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
