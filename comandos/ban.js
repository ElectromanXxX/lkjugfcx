const Discord = require("discord.js")

module.exports = {
  name: "ban",
  alias: ["pong"],

  execute(client, message, args){

    var botperms = message.guild.me.permissions.has("BAN_MEMBERS")
    if(!botperms) return message.channel.send("No tengo permisos suficientes")

    var perms = message.member.permissions.has("BAN_MEMBERS")
    if(!perms) return message.channel.send("No tienes permisos para banear")

    const usuario = message.mentions.members.first()
    if(!usuario) return message.channel.send("Debes mencionar al usuario")
    if(usuario.id === message.author.id) return message.channel.send("No te puedes expulsar a ti mismo")

    const razon = args.slice(1).join(' ')
    if(!razon) return message.channel.send("Debes decir una razon antes de banear")

    usuario.ban({ reason: razon })

    message.channel.send(`Se ha baneado al usuario **${usuario}** correctamente`)

  }
  
}