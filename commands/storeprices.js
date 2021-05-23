const Discord = require("discord.js");
module.exports = {
    name: 'storeprices',
    description: "Display prices for gfx and vfx stuff",
    execute(message, args){
       embed = new Discord.MessageEmbed()
       .setTitle("Prices")
       .setURL("")
       .setDescription("__**Payement Methods**__\n\n• Robux\n• Boosts\n• Paypal\n\n*note : for paypal you will be payed as the same value of robux but with money and also you can pick something that is not on the list (if you have a special order) and we will estimate the price.*")
       .setThumbnail("https://media.discordapp.net/attachments/821483287037870130/822819239517618176/BBH_logo_1.png?width=442&height=442")
       .setImage("https://media.discordapp.net/attachments/625351405724631050/823169006856306718/PRICES.png?width=960&height=360")
       .addField("Montage", "\n♢ -1 minute montage = 250\n♢ 1 minute montage = 350 / 1 boost\n♢ 2 minute montage = 450 / 2 boosts\n♢ 3 min montage = 550 / 3 boosts\n♢ 4 minute and + = will variate between 500 and 700 / 4 boost.")
       .addField("Ident/Intros", "\n♢ Social intro = 50\n♢ Idents = 50")
       .addField("GFX", "\n♢ Render = 30\n♢ Thumbnails = 50\n♢ Banners = 75")
       .addField("Group", "Pay only after we send you what do you want with a watermark. https://www.roblox.com/groups/10033021/Team-BBH-donations#!/store")
       .setFooter("Official BBH GFX/VFX Store Prices 2021")
       .setColor("#52fe5f")
       .setURL("https://www.roblox.com/groups/10033021/Team-BBH-donations#!/store")

       message.channel.send(embed)
    }
}