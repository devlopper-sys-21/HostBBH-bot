module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        
        if (message.member.hasPermission("KICK_MEMBERS")) {

            const target = message.mentions.users.first();
            if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
            }else{
            message.channel.send(`You coudn't kick that member! Verify if the user is in the server or may be higher then you!`);
            }
        }
        else {
            message.channel.send("You don't have the permission to kick members!")
        }
    }

}
