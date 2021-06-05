const Discord = require("discord.js");

const fs = require('fs');


    module.exports = {
        name: 'tournament1',
        description: "Show 2v2 box tournament",
        
        execute(message, args){
            
        if (message.member.hasPermission("BAN_MEMBERS")) {
            embed = new Discord.MessageEmbed()
                .setTitle("2v2 Boxfights Tournament")
                .setURL("https://forms.gle/Ey3iMJ2D3JsVk5p49")
                .setDescription("**Hello and Welcome everybody to the second tournament of Season 2!**\nWe are excited to host this tournament!\n\n**Details :**\n♢ It's a 2v2 Boxfights tournament so everybody need to be in a Duo!\n♢ It's in the /bf map.\n First to 3 wins will be qualified in the next match\n\n **Rules :**\n♢ Hacks of any type is not allowed\n♢ Ghost peaking is not allowed!\n♢ 1ms crouch peaking is not allowed\n♢ Fusing is not allowed\n♢ No bloom glitches!\n♢ Be ready at time!\n♢ Be respectfull.\n\n **If you don't follow one of the rules above your Duo will automaticly get removed from the tournament.**\n\n To Sign up you need one person of your team fill this form : ** https://forms.gle/Ey3iMJ2D3JsVk5p49 **\n\n **IMPORTANT : IF AT ANY MOMENT THE HOST WE SUSPECT YOU OF CHEATING WE WILL ASK YOU FOR THE CLIP SO PREPARE RECORDING OR YOUR WHAT YOU USE FOR DOING CLIPS!**\n\n**The prize pool of this tournament will be 1.5k robux!! **\n1st place get 1k\n2nd place get 500 robux\n\n__**Tournament Date: 5 June, this Saturday 1pm EAST**__\n\n\n**Sign up fast we will pick the first 10 teams!**")
                .setThumbnail("https://images-ext-1.discordapp.net/external/tKdc9-U2qHMr07soKs43R7Xak6ZQ_VV_bCt1IGxp0Z0/%3Fwidth%3D389%26height%3D345/https/media.discordapp.net/attachments/786777556476624957/845779764019200007/unknown.png?width=350&height=310")
                .setImage("https://media.discordapp.net/attachments/602938015261655059/849799554483617832/2v2_box_tournament_bbh.png?width=797&height=449")
                .setFooter(``)
                .setColor("#6efdff")

        message.channel.send(embed)
            }
            else {
                message.channel.send("noob")
            }
        }

    }
