const Discord = require("discord.js");

const fs = require('fs');


    module.exports = {
        name: 'tournament1',
        description: "Show 3v3 box tournament",
        
        execute(message, args){
            
        if (message.member.hasPermission("BAN_MEMBERS")) {
            embed = new Discord.MessageEmbed()
                .setTitle("2v2 kos Tournament")
                .setURL("https://forms.gle/JNL61bvjmu23UEGLA")
                .setDescription("**Hello and Welcome everybody to the first tournament of Season 2!**\nWe are excited to host this tournament!\n\n**Details :**\n♢ It's a 2v2 Kos tournament so everybody need to be in a Duo!\n♢ It's in the FFA map.\n First duo to 40 kills will be qualified in the next match\n\n **Rules :**\n♢ Hacks of any type is not allowed\n♢ Ghost peaking is not allowed!\n♢ 1ms crouch peaking is not allowed\n♢ Fusing is not allowed\n♢ No bloom glitches!\n♢ Be ready at time!\n♢ Be respectfull.\n\n **If you don't follow one of the rules above your Duo will automaticly get removed from the tournament.**\n\n To Sign up you need one person of your team fill this form : ** https://forms.gle/JNL61bvjmu23UEGLA **\n\n **IMPORTANT : IF AT ANY MOMENT THE HOST WE SUSPECT YOU OF CHEATING WE WILL ASK YOU FOR THE CLIP SO PREPARE RECORDING OR YOUR WHAT YOU USE FOR DOING CLIPS!**\n\n**The prize pool of this tournament will be 2k robux!! **\n1st place get all the 2k! (1k each)\n\n__**Tournament Date: 28 May, this Friday 5pm EAST**__\n\n\n**Sign up fast we will pick the first 10 teams!**")
                .setThumbnail("https://images-ext-1.discordapp.net/external/tKdc9-U2qHMr07soKs43R7Xak6ZQ_VV_bCt1IGxp0Z0/%3Fwidth%3D389%26height%3D345/https/media.discordapp.net/attachments/786777556476624957/845779764019200007/unknown.png?width=350&height=310")
                .setImage("https://media.discordapp.net/attachments/833831383162945618/847204264015298600/friday.png?width=797&height=449")
                .setFooter(``)
                .setColor("#6efdff")

        message.channel.send(embed)
            }
            else {
                message.channel.send("noob")
            }
        }

    }
