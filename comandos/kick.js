const Discord = require("discord.js")

module.exports = {
  name: "kick",
  alias: ["pong"],

  execute(client, message, args){

    var botperms = message.guild.me.permissions.has("KICK_MEMBERS")
    if(!botperms) return message.channel.send("❌ | No tengo permisos para kickear | ❌")

    var perms = message.member.permissions.has("KICK_MEMBERS")
    if(!perms) return message.channel.send("❌ | No tienes permisos para kickear | ❌")

    const usuario = message.mentions.members.first()
    if(!usuario) return message.channel.send("❌ | Debes mencionar un usuario para kickear | ❌")

    const razon = args.slice(1).join(' ')
    if(!razon) return message.channel.send("❌ | Debes escribir una razon para expulsar a este miembro | ❌")

    message.guild.member(usuario).kick(razon);

    message.channel.send(`Se ha expulsado al usuario ${usuario} correctamente. \nRazon: ${razon}`)

  } 
  
}