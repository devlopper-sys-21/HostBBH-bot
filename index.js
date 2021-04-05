//Variables
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const config = require("./config.json");
const prefix = ">";
const jsonfile = require("jsonfile");
const random = require("random");



//Starting redirecting the stats.json file
var stats = {};
if (fs.existsSync("stats.json")) {
    stats = jsonfile.readFileSync("stats.json");
}


/*
//embed of level up message
LevelUpembed = new Discord.MessageEmbed()
       .setTitle("Level Up!")
       .setURL("")
       .setDescription(`Good Stuff! You just leveled up to ${user.level}!`)
       .setFooter(`keep it up!`)
       .setColor("#61f9d8")

//Discord-xp level system 
Levels.setURL("")


bot.on("message", async message => {
  if (!message.guild) return;
  if (message.author.bot) return;

  const randomXp = Math.floor(math.random() * 9) +1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send(LevelUpembed);
  }
})
*/


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Made by Oxzify#0093");
  });

//Starting redirecting the stats.json file
var stats = {};
if (fs.existsSync("stats.json")) {
    stats = jsonfile.readFileSync("stats.json");
}



//commands
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

 
client.on('message', message =>{
    if(!message.content || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'commands'){
      client.commands.get('commands').execute(message, args);
    }
    else if(command === 'moderationcmd'){
      client.commands.get('moderationcmd').execute(message, args);
    }
    /*
    else if(command === 'rulesgfx'){
    client.commands.get('rulesgfx').execute(message, args);
    }
    */
    else if(command === 'kick'){
    client.commands.get('kick').execute(message, args);
    }
    else if(command === 'ban'){
    client.commands.get('ban').execute(message, args);
    }
    else if(command === 'unban'){
      client.commands.get('unban').execute(message, args);
    }
    /*
    else if(command === 'info'){
      client.commands.get('info').execute(message, args);
    }
    else if(command === 'boostperks'){
      client.commands.get('boostperks').execute(message, args);
    }
    else if(command === 'verifyinfo'){
      client.commands.get('verifyinfo').execute(message, args);
    }
    else if(command === 'storeinfo'){
      client.commands.get('storeinfo').execute(message, args);
    }
    else if(command === 'storeprices'){
      client.commands.get('storeprices').execute(message, args);
    }
    else if(command === 'scrimrules'){
      client.commands.get('scrimrules').execute(message, args);
    }
    else if(command === 'partnershipinfo'){
      client.commands.get('partnershipinfo').execute(message, args);
    }
    else if(command === 'compinfo'){
      client.commands.get('compinfo').execute(message, args);
    }
    else if(command === 'ranksystem'){
      client.commands.get('ranksystem').execute(message, args);
    }
    else if(command === 'add'){
      client.commands.get('add').execute(message, args);
    }
    else if(command === 'kosrules'){
      client.commands.get('kosrules').execute(message, args);
    }
    else if(command === 'ffaboxrules'){
      client.commands.get('ffaboxrules').execute(message, args);
    }
    else if(command === 'soloandduoscrimrules'){
      client.commands.get('soloandduoscrimrules').execute(message, args);
    }
    */
    else if(command === 'hostkos'){
      client.commands.get('hostkos').execute(message, args);
    }
    else if(command === 'members'){
      client.commands.get('members').execute(message, args);
    }
    else if(command === 'hostsolo'){
      client.commands.get('hostsolo').execute(message, args);
    }
    else if(command === 'hostduo'){
      client.commands.get('hostduo').execute(message, args);
    }
    else if(command === 'hostbox'){
      client.commands.get('hostbox').execute(message, args);
    }


    if (message.author.id == client.user.id)
  return;

  if (message.guild.id in stats == false) {
      stats[message.guild.id] = {};
  }

  const guildStats = stats[message.guild.id];
  if(message.author.id in guildStats === false ) {
      guildStats[message.author.id] = {
          xp: 0,
          level: 0,
          last_message: 0,
          points: 0
      };
  }
  const userStats = guildStats[message.author.id];
    if (Date.now() - userStats.last_message > 60000 ) {
        userStats.xp += random.int(15, 25);
    userStats.last_message = Date.now();

    const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;
    if(userStats.xp >= xpToNextLevel) {
        userStats.level++;
        userStats.xp = userStats.xp - xpToNextLevel;
        message.channel.send(message.author.username + " has reached level " + userStats.level);
    }
    const Addpoints = 

    jsonfile.writeFileSync("stats.json", stats);


    console.log(message.author.username + ' now has '  + userStats.xp);
    console.log(xpToNextLevel + " XP needed for the next level."); 
    
    }
    const parts = message.content.split(" ");

    if(command === "level") {
      embed = new Discord.MessageEmbed()
       .setTitle("Level")
       .setURL("")
       .setDescription(`Theses are your stats, ${message.member}`)
       .setFooter(message.author.username)
       .setColor("#00ff80")
       .addFields(
        { name: 'Level', value: userStats.level + "", inline: true },
        { name: 'Xp', value: userStats.xp, inline: true },
        { name: "points", value: userStats.points, inline: true},
      )

       message.channel.send(embed)
       }


      //give points system


       else if (command === 'give') {
        if (args.length < 2) {
          return message.reply('Please mention the user you want to give points and specify a number of points.');
        }
        async function GivePointsok (){

          const guildStats = stats[message.guild.id];
        

          function getUserFromMention(mention) {
            if (!mention) return;
          
            if (mention.startsWith('<@') && mention.endsWith('>')) {
              mention = mention.slice(2, -1);
          
              if (mention.startsWith('!')) {
                mention = mention.slice(1);
              }
          
              return client.users.cache.get(mention);
            }
          }

          const user = getUserFromMention(args[0]);
        if (!user) {
          return message.reply('Please use a proper mention if you want to give someone points.');
        }
        const userStats = guildStats[user.tag.points];
        const numberOfPointsToGive = getUserFromMention(args[1]);
        try {
          
        await userStats + numberOfPointsToGive;
        } catch (error) {
          return message.channel.send(`Failed to give **${user.tag}**: ${error}`);
        }
      
        return message.channel.send(`Successfully gave points to**${user.tag}**`);
      }
      GivePointsok();
    }
  

  
});


client.login(config.token);