const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "invite",
  description: "invite the bot in your server",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Invite " + client.user.username)
  .setColor("RED")
  .setDescription(`[Click to invite](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=70282305&scope=bot)`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}
