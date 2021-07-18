const Discord = require("discord.js");
module.exports = {
    name: 'adprices',
    description: "BBH Season 2",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("RSL Ad prices")
       .setURL("")
       .setDescription("**RSL Ad Prices:**\n\nRSL is constantly looking for different ways to fund community events, tournaments, etc… All proceeds/purchased ads will go fully to the funding for this server. We also offer different payment methods such as PayPal, Venmo, and others. Our main payment method is robux, but we are always open to negotiate different offers that have some value to us. (Note: Do not try to offer things that will not benefit us.)\n\n*Prices:*\nNo Ping = 75 Robux\nPartnership Ping = 125 Robux\nHere Ping = 150 Robux\nEveryone Ping = 200 Robux\n\n*Other Information:*\n- No Refunds\n- Your advertisement can only have one promotion\n Your advertisement must be confirmed by Oxzify before the transaction is confirmed.\n- Your advertisement must not contain any NSFW/18+ content in the context.\n- If your payment fails to come-in within a couple of weeks your advertisement will be deleted.\n- Do not contact any other staff member other than Oxzify about paid ads.\n\nIf you are interested in purchasing an advertisement make sure to contact <@468883993383665676> for any questions or details!")
       .setImage("https://media.discordapp.net/attachments/602938015261655059/866299392867958804/paid_ads.png?width=958&height=449")
       .setFooter(``)
       .setColor("#30e7ff")

       message.channel.send(embed)
    }
}