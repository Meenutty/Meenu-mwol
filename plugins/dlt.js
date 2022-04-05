const Asena = require("../events");
const { MessageType } = require("@adiwajshing/baileys");

Asena.addCommand(
  { pattern: 'dlt ?(.*)', fromMe: true, desc: "deletes message" },
  async (message, match) => {
   return await message.client.deleteMessage(message.jid, {id: message.reply_message.id, remoteJid: message.jid, fromMe: true})  
  })
