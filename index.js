const Discord = require('discord.js')
require("dotenv").config()

const generateImage = require('./commands/welcome/generateImage')

const client  = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES","GUILD_MEMBERS"]})


let bot = {
    client, 
    prefix: "!",
    owners: ["672509525726855169"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.slashcommands = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}!`)
// })

// client.on("messageCreate", (msg) => {
//     if (!msg.author.bot) {
//         let username = msg.author.username
//         let discrim = msg.author.discriminator

//         console.log(username + " #" + discrim + ":    " +`${msg}`)
//     }

//     if (msg.content == "ping"){
//         msg.reply("Pong!")
//     }

//     if (msg.content == "help"){
//         msg.reply("Lista komend:\n"
//                 + "!ping - Bot odpowiada \"Pong!\"\n")
//     }
// })

// client.on("guildMemberAdd", async (member) => {
//     const img = await generateImage(member)
//     member.guild.channels.cache.get(welcomeChannelId).send({
//         content: `<@${member.id}> Witaj na serwerze!`,
//         files: [img]
//     })
// })

client.login(process.env.TOKEN)