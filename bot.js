const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`صيآنة`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('ready', async() => {
var server = "504985675851104256"; 
var channel = "510746838471802881";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT ,F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT ,F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT , F0R ; Thunder&ReD GhOsT **')
    },305);
})






client.login(process.env.BOT_TOKEN);
