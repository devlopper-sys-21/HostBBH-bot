module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        
        if (message.member.hasPermission("BAN_MEMBERS")) {

            const target = message.mentions.users.first();
            if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned!");
            }else{
            message.channel.send(`You coudn't ban that member! Verify if the user is in the server or may be higher then you!`);
            }
        }
        else {
            message.channel.send("You don't have the permission to ban members!")
        }
    }

}
