const Discord = require("discord.js")
const qdb = require("quick.db")

module.exports = {
  name: "afk",
  alias: ["pong"],

async execute(client, message, args){

  if(!args.join(' ')){
  razon = '**no especificada**'
  } else {
   razon = args.join(' ')
  }

  await qdb.set(`afk-${message.author.id}+${message.guild.id}`, razon)
  message.channel.send(`${message.author}, Ahora esta AFK\n**Motivo: ${razon}**\nAvisare a quienes te mencionen`)

  }
  
}