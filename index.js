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
 
    if(command === 'help'){
      client.commands.get('help').execute(message, args);
    }
    else if(command === 'commands'){
      client.commands.get('commands').execute(message, args);
    }
    else if(command === 'command'){
      client.commands.get('command').execute(message, args);
    }
    else if(command === 'moderationcmd'){
      client.commands.get('moderationcmd').execute(message, args);
    }
    else if(command === 'members'){
      client.commands.get('members').execute(message, args);
    }
    else if(command === 'membercount'){
      client.commands.get('membercount').execute(message, args);
    }
    else if(command === 'kick'){
      client.commands.get('kick').execute(message, args);
    }
    else if(command === 'ban'){
      client.commands.get('ban').execute(message, args);
    }
    else if(command === 'hosttrio'){
      client.commands.get('hosttrio').execute(message, args);
    }
    else if(command === 'hostkos'){
      client.commands.get('hostkos').execute(message, args);
    }
    else if(command === 'hostsolo'){
      client.commands.get('hostsolo').execute(message, args);
    }
    else if(command === 'hostduobox'){
      client.commands.get('hostduobox').execute(message, args);
    }
    else if(command === 'hostduo'){
      client.commands.get('hostduo').execute(message, args);
    }
    else if(command === 'hostbox'){
      client.commands.get('hostbox').execute(message, args);
    }

});


client.login(config.token);