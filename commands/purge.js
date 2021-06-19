module.exports = {
    name: 'purge',
    description: 'Bulk Delete An Message'
  }
  
  module.exports.run = async(bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`You don't have permission \`MANAGE_CHANNELS\`!`)
    message.channel.bulkDelete(args[0])
  } 