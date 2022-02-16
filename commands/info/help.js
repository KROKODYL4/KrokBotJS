module.exports = {
    name: "help",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("Lista komend:\n"
                    + "!help - Ta lista\n"
                    + "!ping - Bot odpowiada \"Pong!\"\n")
    }
}