const Discord = require("discord.js")

module.exports = {
  name: "ping",
  alias: ["pong"],

  execute(client, message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle("Ping")
    .setDescription(`✅ Mi Ping es: **${client.ws.ping}**`)
    .setColor("RANDOM")
    .setFooter("Manager Frankkie")
    .setTimestamp()

    message.channel.send({ embeds: [embed] })

  }
  
}