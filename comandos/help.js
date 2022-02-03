const Discord = require("discord.js")

module.exports = {
  name: "help",
  alias: ["pong"],

  execute(client, message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle("Ayuda")
    .setDescription("`avatar`: Ver la foto de perfil o de otra persona\n`bassboost`: <none|low|medium|high>  Habilitar saturacion el las\n`bump`: Mover la cancion al frente de la lista\n`disconnect`: Sacar al bot del canal de voz\n`grab`: Mandar el nombre de la cancion actual a tu MD\n`loop`: La cancion que esta sonando actualmente\n`loopqueue`: Todas las canciones de la lista\n`pause`: Pausar la cancion\n`play [cancion]`: Poner una cancion para escuchar\n`queue`: Ver el numero en la lista de la cancion actual\n`resume`: Resumir la cancion de donde se pauso\n`skip`: Saltarse una cancion\n`volume`: Subir o bajar el volumen de la cancion")
    .setColor("RANDOM")
    .setFooter("Manager Frankkie")
    .setTimestamp()

    message.channel.send({ embeds: [embed] })

  }
  
}