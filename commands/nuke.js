module.exports = {
    name: "nuke",
    description: "Nuke this channels"
  };
  
  module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(`You don't have permission \`MANAGE_CHANNELS\`!`);
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.reply(`I don't have permission \`MANAGE_CHANNELS\`!`);
    message.channel.clone().then(async channel => {
      let msg = await channel.send(
        `👍 Successfully Nuked this Channels!\nhttps://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831`
      );
      channel.setPosition(message.channel.position);
      channel.setRateLimitPerUser(message.channel.rateLimitPerUser);
    });
    message.channel.delete();
  };
  