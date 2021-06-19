let {MessageEmbed} = require('discord.js')

module.exports = {
  name: 'avatar',
  description: 'Show anyone\'s avatar'
}

module.exports.run = async(bot, message, args) => {
  let user = bot.users.cache.find(user => user.tag === args.join(' ')) || message.mentions.users.first() || message.author
  let Embeds = new MessageEmbed()
  .setDescription(`${user}'s Avatar`)
  .setThumbnail(user.displayAvatarURL())
  .setImage(user.displayAvatarURL() + '?size=2048')
  .setTimestamp()
  .setColor('RANDOM');
  message.channel.send(Embeds)
};