const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.cache.has('787725246571872308')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let al = "787715621231132735"; 
  let ver = "787715642068566036"; 
  let ver2 = "787722240355205120"; 
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  if (!isim) return message.channel.send("Bir İsim Girmelisin!");
  member.setNickname(`${isim}  [${yaş}]`);
  
    member.roles.add(ver);
    members.roles.add(ver2)
    member.roles.remove(al);
  

  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(":butterfly: Kayıt işlemi başarılı :butterfly:")
    .setImage("https://media.discordapp.net/attachments/724605895924908042/759303751269613638/744532804909531146.gif")
    .setDescription(`
**Kayıt Edilen Kullanıcı** : ${member.user.username}
**Kayıt Eden Yetkili** : ${message.author.username}

**Kayıt İşleminde Verilen Rol** : 
<@&787715642068566036>
<@&787722240355205120>
**Kayıt İşleminde Alınan Rol** :
<@&787715621231132735>
`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek" , "e"],
  permLevel: 0
}
exports.help = {
  name: 'kayıt',
  description: "Erkek Kayıt Sıstemı",
  usage: 'Erkek isim yaş'
}