const Discord = require('discord.js')
const EconomyManager = require('quick.eco');
const db = require('quick.db');
const client = new Discord.Client()
const prefix = '!'
const fs = require('fs')
const token = 'ODQ5NjQ4MjI4Njg5MTE3MjA0.YLeOkw.AoamstOkOpML8OPc3Q-0XHJj25E'
var economy = require('economy');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


client.on("ready", () => {
  console.log(`${client.user.tag} sudah siap melayani anda`)
  setInterval(function() {
    let statuses = [
    `AyoGaut Official Bot`
  ]
    let status = statuses[Math.floor(Math.random() * statuses.length)]
    
    
    client.user.setActivity(status, {type: 'WATCHING'})
  }, 2000)
})

client.on('message', async message => {
  
  if(!message.content.startsWith(prefix)) return;
  let args = message.content.slice(prefix.length).trim().split(/ +/g)
  let cmd = args.shift().toLowerCase();
  let command = cmd
  client.cmd = cmd

  
  if (cmd === 'play') {
    let track = await client.player.playStream(message.member.voiceChannel, args[0], message.member.user.tag)
    message.channel.send(`Now playing: ${track.name}! - Requested by ${track.requestedBy}!`)
  }
  
  let ops = {
    ownerID: ['853448839360151572', '480697241708003350']
  }
  if (!cmd) return;
  try {
    let commandsFiles = require(`./commands/${cmd}`)
    commandsFiles.run(client, message, args)
    
  } catch (error) {
    return message.reply("Command Not Found, List Of Command: https://ayogaut.glitch.me/commands.html");
  }
  const now = Date.now();
  if (db.has(`cd_${message.author.id}`)) {
    const expirationTime = db.get(`cd_${message.author.id}`) + 3000;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(
          1
        )} more second(s) before reusing the \`${cmd}\` command.`
      );
    }
  }
  db.set(`cd_${message.author.id}`, now);
  setTimeout(() => {
    db.delete(`cd_${message.author.id}`);
  }, 3000);
  

    
 //gpp biar kita bisa liat dia cmd apa siapa aja yg cmd
  //tinggal commandsnya aja
})

client.login(token);