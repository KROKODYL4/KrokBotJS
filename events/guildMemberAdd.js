module.exports = {
    name: "guildMemberAdd",
    run: async (member) => {
        const welcomeChannelId = "943084256945664010"
        const img = await generateImage(member)
        
        member.guild.channels.cache.get(welcomeChannelId).send({
            content: `<@${member.id}> Witaj na serwerze!`,
            files: [img]
        })
    }
}