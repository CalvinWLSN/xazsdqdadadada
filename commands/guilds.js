module.exports = {
    name:"guilds",
    async run (client, message, args, db) {
  
      let guildMap = client.guilds.cache.map( g => `**${g.name}** | Membercount: **${g.memberCount}** | Owner: **<@!${g.ownerID}>**`).join("\n")
  if(guildMap.length > 2000) {
      guildMap  = "Too many servers to display."
  }
      message.channel.send({
        embed: {
          title: "My guilds...",
          description: guildMap,
          color: "RED",
          footer: "Guilds."
        }
      })
  
    } 
}