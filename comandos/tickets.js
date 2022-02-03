const Discord = require("discord.js")

module.exports = {
  name: "ticket",
  alias: ["pong"],

  execute(client, message, args){
    const embed = new Discord.MessageEmbed()
    .setTitle("Tickets")
    .setDescription("Aqui puedes abrir tu ticket por BUGS,ERRORES,REPORTES O MAL STAFF")
    .setColor("GREEN")
    .setFooter("Manager Frankkies")

    const row = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
        .setCustomId("ticket")
        .setStyle("SUCCESS")
        .setLabel("Crear Ticket")
        .setEmoji("🎟️")
    )

    message.channel.send({ embeds: [embed], components: [row] })

  }

}  