const Discord = require('discord.js')
require("dotenv").config()

const prefix = process.env.prefix

const generateImage = require('./generateImage')

const welcomeChannelId = "943084256945664010"

const client  = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES","GUILD_MEMBERS"]})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", (msg) => {
    if (!msg.author.bot) {
        let username = msg.author.username
        let discrim = msg.author.discriminator

        console.log(username + " #" + discrim + ":    " +`${msg}`)
    }

    if (msg.content == prefix + "ping"){
        msg.reply("Pong!")
    }

    if (msg.content == prefix + "help"){
        msg.reply("Lista komend:\n"
                + "!ping - Bot odpowiada \"Pong!\"\n")
    }
})

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Witaj na serwerze!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)