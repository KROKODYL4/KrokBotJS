const Discord = require('discord.js')

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const {client, prefix, owners} = bot

        if (!message.guild) return

        if (!message.content.startsWith(prefix))
            return

        if (!message.author.bot) {
            let username = msg.author.username
            let discrim = msg.author.discriminator    
            console.log(username + " #" + discrim + ":    " +`${msg}`)

            return
        }

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)
        if (!command) return

        let member = message.member

        if (command.devOnly && !owners.includes(member.id)) {
            return message.reply("Ta komenda jest dostępna tylko dla właściciela bota!")
        }

        if (command.permissions && member.permissions.missing(command.permissions). length !== 0) {
            return message.reply("Nie masz uprawnień do korzystania z tej komendy!")
        }

        try {
            await command.run({...bot, message, args})
        }
        catch (err) {
            let errMsg = err.toString()

            if (errMsg.startsWith("?")) {
                errMsg = errMsg.slice(1)
                await message.reply(errMsg)
            }
            else {
                console.error(err)
            }
        }
    }
}