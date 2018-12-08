const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});



client.on('ready', async() => {
var server = "520576939690557470"; // ايدي السررفر
var channel = "520576978693259264";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


