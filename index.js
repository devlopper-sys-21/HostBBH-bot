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
    else if(command === 'hostkos'){
      client.commands.get('hostkos').execute(message, args);
    }
    else if(command === 'hostbox'){
      client.commands.get('hostbox').execute(message, args);
    }
    /*
    else if(command === 'tournament1'){
      client.commands.get('tournament1').execute(message, args);
    }
    else if(command === 'storeprices'){
      client.commands.get('storeprices').execute(message, args);
    }
    if(command === 'storeinfo'){
      client.commands.get('storeinfo').execute(message, args);
    }
    if(command === 'soloandduoscrimrules'){
      client.commands.get('soloandduoscrimrules').execute(message, args);
    }
    if(command === 'rulesgfx'){
      client.commands.get('rulesgfx').execute(message, args);
    }
    if(command === 'ranksystem'){
      client.commands.get('ranksystem').execute(message, args);
    }
    if(command === 'partnershipinfo'){
      client.commands.get('partnershipinfo').execute(message, args);
    }
    if(command === 'kosrules'){
      client.commands.get('kosrules').execute(message, args);
    }
    if(command === 'info'){
      client.commands.get('info').execute(message, args);
    }
    if(command === 'ffaboxrules'){
      client.commands.get('ffaboxrules').execute(message, args);
    }
    if(command === 'compinfo'){
      client.commands.get('compinfo').execute(message, args);
    }
    if(command === 'boostperks'){
      client.commands.get('boostperks').execute(message, args);
    }
    if(command === 'bbhseason2'){
      client.commands.get('bbhseason2').execute(message, args);
    }
    if(command === 'verifyinfo'){
      client.commands.get('verifyinfo').execute(message, args);
    }
    if(command === 'activityperks'){
      client.commands.get('activityperks').execute(message, args);
    }
    if(command === 'adprices'){
      client.commands.get('adprices').execute(message, args);
    }
    if(command === 'scrimsrules'){
      client.commands.get('scrimsrules').execute(message, args);
    }
    if(command === 'realisticsrules'){
      client.commands.get('realisticsrules').execute(message, args);
    }
    */
    if(command === 'hostsolorotations'){
      client.commands.get('hostsolorotations').execute(message, args);
    }
    if(command === 'hostduorotations'){
      client.commands.get('hostduorotations').execute(message, args);
    }
    /*
    if(command === 'bannedguns'){
      client.commands.get('bannedguns').execute(message, args);
    }
    if(command === 'rotationsrules'){
      client.commands.get('rotationsrules').execute(message, args);
    }
    */
    //hostsolorealistics hostduorealistics



});


client.login(config.token);