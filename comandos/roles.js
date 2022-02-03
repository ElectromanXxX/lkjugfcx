const Discord = require("discord.js")

module.exports = {
  name: "autocolores",
  alias: ["pong"],

  execute(client, message, args){

  const row = new Discord.MessageActionRow()
  .addComponents(
    [
    new Discord.MessageButton()
    .setCustomId("rojo")
    .setLabel("Color Rojo")
    .setStyle("DANGER")
    .setEmoji("🔴")
    ],
    [
    new Discord.MessageButton()
    .setCustomId("azul")
    .setLabel("Color Azul")
    .setStyle("SECONDARY")
    .setEmoji("🔵")      
    ],
  )

  const embed = new Discord.MessageEmbed()
  .setTitle("AutoColores")
  .setDescription("Hey! Como estas aqui podras elegir los siguientes roles de colores para tu perfil \n\n🔴 Rojo \n\n🔵 Azul")
  .setColor("BLUE")

  message.channel.send({ embeds: [embed], components: [row] })

  }
  
}