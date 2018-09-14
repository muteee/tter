const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("488013994410377226");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome to PaX ..**`), 4000)        
}
});
bot.login(process.env.BOT_TOKEN);
