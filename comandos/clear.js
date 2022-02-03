const Discord = require("discord.js")

module.exports = {
  name: "clear",
  alias: ["pong"],

  execute(client, message, args){

    var perms = message.member.permissions.has("KICK_MEMBERS")
    if(!perms) return message.channel.send("♻️ | No tienes los permisos suficientes | ♻️")

    const cantidad = args[0]

    if(!cantidad) return message.reply("♻️ | Debes escribir una cantidad para eliminar mensajes | ♻️")

    if(isNaN(cantidad)) return message.reply("♻️ | Debes escribir una cantidad para eliminar mensajes | ♻️")

    if(cantidad > 100) return message.reply("♻️ | No puedes eliminar mas de **100** mensajes | ♻️")

    message.delete().then(q => {
      message.channel.bulkDelete(cantidad)
      message.channel.send(`♻️ | Se han eliminado **${cantidad}** mensajes | ♻️`)
    })

  }
  
}