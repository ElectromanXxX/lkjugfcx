const Discord = require("discord.js")

module.exports = {
  name: "avatar",
  alias: ["pong"],

  execute(client, message, args){

    let user = message.mentions.users.first() || message.author;

    const embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${user.tag}`)
    .setImage(user.displayAvatarURL({ size: 1024, dynamic: true }))
    .setColor("RANDOM")
    .setFooter(`Avatar pedido por: ${message.author.username}`)

    message.channel.send({ embeds: [embed] })

  }
  
}