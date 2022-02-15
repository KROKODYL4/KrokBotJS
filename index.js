const Discord = require('discord.js')
require("dotenv").config()

const token = process.env.TOKEN

const generateImage = require('./generateImage')

const welcomeChannelId = "943084256945664010"

const client  = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", (msg) => {
    if (msg.content == "ping"){
        msg.reply("Pong!")
    }
})

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Witaj na serwerze!`,
        files: [img]
    })
})

client.login(token.toString())