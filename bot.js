const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});


client.on('ready', async() => {
var server = "520576939690557470"; // ايدي السررفر
var channel = "520576978693259264";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})

client.login(process.env.BOT_TOKEN);

client2.on('ready', async() => {
var server = "520576939690557470"; // ايدي السررفر
var channel = "520577003355635740";//ايدي الروم
    setInterval(()=>{
    client2.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})



// THIS  MUST  BE  THIS  WAY
client2.login(process.env.BOT_TOKEN2);

client3.on('ready', async() => {
var server = "520576939690557470"; // ايدي السررفر
var channel = "522729217977483264";//ايدي الروم
    setInterval(()=>{
    client3.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})



// THIS  MUST  BE  THIS  WAY
client3.login(process.env.BOT_TOKEN3);


