const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    description: "Lista komend",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        const Help = new MessageEmbed()
        .setColor("DARK_GREEN")
        .setDescription("Lista komend:\n"
                        +"/help - ta lista\n"
                        +"/status - pokazuje status serwera"
                        +"/ping - bot odpowiada \"Pong!\"\n")

        interaction.reply({embeds: [Help]})
    }
}