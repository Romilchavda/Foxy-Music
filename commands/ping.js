//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Pinging the bot",
  execute(client, message) {
    message.channel.send(`🏓Pong! \`${Math.round(client.ws.ping)}ms\``)
  }
};
