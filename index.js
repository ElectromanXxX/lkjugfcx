const Discord = require("discord.js")
const intents = new Discord.Intents()
const client = new Discord.Client({ intents: 32767 })
const qdb = require("quick.db")
client.login("OTM2Njc5NzgzMzYwNzc4Mjgw.YfQtBw.eVgZ_RqlXnxLt76B4gsaFCBSkkM");

require("dotenv").config();
const keepAlive = require("./server.js");
const Monitor = require("ping-monitor");

keepAlive();
const monitor = new Monitor({
 website: "https://lmkjbhcf.ninja3dios.repl.co",
 title: "MonitorBot",
 interval: 10//minutos
});

monitor.on("up", (res) => console.log(`${res.website} esta encendido.`))
monitor.on("down", (res) => console.log(`${res.website} se ha caido. - ${res.statusMessage}`));
monitor.on("stop", (website) => console.log("${website} se ha parado"))
monitor.on("error", (error) => console.log(error));

client.on("ready", () => {
  client.user.setPresence({
    status: "online",
    activities: [{
      name: "Bot 24/7",
      type: "WATCHING"
    }]
  })
  console.log("Bot Funcional")
  client.channels.cache.get("936078682978656276").messages.fetch("938172303265648640").then(msg => {
    let ifilter = i => !i.user.bot;

    const collector = msg.createMessageComponentCollector({ filter: ifilter })

    collector.on("collect", async i => {
      if(i.customId === "rojo"){
        if(!i.member.roles.cache.has("936977627032473700")){
          await i.member.roles.add("936977627032473700")
          i.reply({ content: "Se te agrego el rol <@&936977627032473700>", ephemeral: true})
        } else {
          i.reply({ content: "Ya tienes este rol <@&936977627032473700>", ephemeral: true})
        }
      }

      if(i.customId === "azul"){
        if(!i.member.roles.cache.has("936977787397505074")){
          await i.member.roles.add("936977787397505074")
          i.reply({ content: "Se te agrego el rol <@&936977787397505074>", ephemeral: true})
        } else {
          i.reply({ content: "Ya tienes este rol <@&936977787397505074>", ephemeral: true})
        }
      }
    })
  })
});

const fs = require("fs")
let { readditSync } = require("fs")

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./comandos").filter(file => file.endsWith("js"))

for (const file of commandFiles){
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.on("messageCreate", async (message) => {
  
  let prefix = "fb!"
  
  if(message.author.bot) return;

  ///afk
  
  if(qdb.has(`afk-${message.author.id}+${message.guild.id}`)){
    await qdb.delete(`afk-${message.author.id}+${message.guild.id}`)
    message.channel.send(`Bienvenido ${message.author}\nTu estado afk se ha removido`)
  }

  if(message.mentions.members.first()){
    const info = qdb.get(`afk-${message.author.id}+${message.guild.id}`)
    if(qdb.has(`afk-${message.author.id}+${message.guild.id}`)){
      message.channel.send(`${message.author}, ${message.mentions.users.first().username} esta en estado afk\nMotivo: ${info}`)
    }
  }

  ///afk

  if(message.channel.type === "dm") return;

  if(!message.content.startsWith(prefix)) return;


  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));

  if(cmd){
    cmd.execute(client, message, args)
  }

});

client.on("interactionCreate", async(interaction) => {
  if(interaction.isButton()){
    if(interaction.customId === "ticket"){
      const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
      interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
        type: "GUILD_TEXT",
        parent: "936079833832767558",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          },
          {
            id: everyone.id,
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ]
      }).then(c => {
        const mensaje = new Discord.MessageEmbed()
        .setTitle(`${interaction.user.username}, Bienvenido a tu ticket`)
        .setDescription("Este ticket es para que resuelvas dudas, reportes bugs, mal uso de staff, etc.. Espera a que un administrador se contacte contigo. Gracias")
        .setColor("RANDOM")

        c.send({ embeds: [mensaje] })
      })

      interaction.reply({ content: `<@${interaction.user.id}>, Tu ticket se ha creado con exito!`, ephemeral: true })
    }
  }
})