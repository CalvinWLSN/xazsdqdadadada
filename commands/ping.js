module.exports = {
    name: 'ping',
    description: 'Show member ping'
  }
  
  module.exports.run = async(bot, message, args) => {
    var ping = Date.now() - message.createdTimestamp + " ms";
   message.channel.send(`Pong:ping_pong: | It Took ${Date.now() - message.createdTimestamp}ms`)
  }