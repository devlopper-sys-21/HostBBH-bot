const Discord = require("discord.js");

const fs = require('fs');


    module.exports = {
        name: 'tournament1',
        description: "Show 3v3 box tournament",
        
        execute(message, args){
            
        if (message.member.hasPermission("BAN_MEMBERS")) {
            embed = new Discord.MessageEmbed()
                .setTitle("3v3 Boxfight Tournament")
                .setURL("https://forms.gle/qSovWvbQBaHTCMbo9")
                .setDescription("**Hello and Welcome everybody to the first tournament of BBH!**\nWe are excited to announce you that our first tournament!\n\n**Details :**\n♢ It's a 3v3 boxfight tournament so everybody need to be in a trio!\n♢ It's in the Boxfights map.\n First to 5 wins will be qualified in the next match\n\n **Rules :**\n♢ Hacks of any type is not allowed\n♢ Ghost peaking is not allowed!\n♢ 1ms crouch peaking is not allowed\n♢ Fusing is not allowed\n♢ No bloom glitches!\n♢ Be respectfull.\n\n **If you don't follow one of the rules above your trio will automaticly get removed from the tournament.**\n\n To Sign up you need one person of your team fill this form : ** https://forms.gle/qSovWvbQBaHTCMbo9 **\n\n **IMPORTANT : IF AT ANY MOMENT THE HOST WE SUSPECT YOU OF CHEATING WE WILL ASK YOU FOR THE CLIP SO PREPARE RECORDING OR YOUR WHAT YOU USE FOR DOING CLIPS!**\n\n**The prize pool of this tournament will be 400 robux**\n1st place - 250 robux\n2nd place - 100 robux\n3rd place - 50 robux\n\n **note: We're gonna start to do weelky tournaments!**\n\n__**Tournament Date: 1 May, this Saturday 2pm EST**__")
                .setImage("https://media.discordapp.net/attachments/661695177877880832/837350589536141373/tournaments_bbh_1_may.png?width=797&height=448")
                .setFooter(`1/5/2021`)
                .setColor("#ffcc33")

        message.channel.send(embed)
            }
            else {
                message.channel.send("noob")
            }
        }

    }
