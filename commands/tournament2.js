const Discord = require("discord.js");

const fs = require('fs');


    module.exports = {
        name: 'tournament2',
        description: "Show 2v2 box tournament",
        
        execute(message, args){
            
        if (message.member.hasPermission("BAN_MEMBERS")) {
            embed = new Discord.MessageEmbed()
                .setTitle("Duos Rotations Tourney")
                .setURL("https://forms.gle/J7XukV9HgqfU3rHE6")


                .setDescription(`**Hello and Welcome everybody to the first tournament of RSL**\n
                We are excited to host this tournament!\n\n**Details :**\n♢ It's a Duos rotations tournament so everybody need to be in a Duo!\n♢ It's in the ffa map (Green Mountain map).\nFirst you need to have a **gray AR (Assault Rifle)** and **gray Pump Shotgun** __**ONLY**__, the host will tell you when to rotate at what time. You can view the image below the different locations to know. If the duo or one player in the duo don't make in the location said in time, you will be told from the host to your duo reset. Last duo standing is winning. 
                \n\n **Rules :**\n♢ Hacks of any type is not allowed\n♢ Ghost peaking is not allowed!\n♢ 1ms crouch peaking is not allowed\n♢ No bloom glitches!\n♢ Be ready at time!\n♢ Be respectfull.\n\n **If you don't follow one of the rules above your Duo will automaticly get removed from the tournament.**\n\n
                 To Sign up you need one person of your team fill this form : ** https://forms.gle/J7XukV9HgqfU3rHE6 **\n\n
                  **IMPORTANT : YOU WILL HAVE TO RECORD SEMI-FINALS AND FINALS**\n\n**The prize pool of this tournament will be 600 Robux (the winning duo get 600) **\n
                  \n\n__**Tournament Date: 25 July, this Sunday 1pm EAST**__\n\n\n**Sign up fast we will pick the first 10 teams!**\n\n **Here if you are signing up, the locations for rotations: https://drive.google.com/drive/folders/1QjguLqIGeQjEPSvc2gkhANWCw9CjXoJP?usp=sharing **`)
                
                
                
                
                .setThumbnail("https://media.discordapp.net/attachments/602938015261655059/866299626289102908/BBH_LEAGUE_LOGO_REBRANDED.png?width=449&height=449")
                .setImage("")
                .setFooter(``)
                .setColor("#ffcb0d")

        message.channel.send(embed)
            }
            else {
                message.channel.send("noob")
            }
        }

    }
