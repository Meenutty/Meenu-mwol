const LizaMwol = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
 var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
var wish = ''
if (hrs >= 00 && hrs <= 12) wish = '𝑮𝑶𝑶𝑫 𝑴𝑶𝑹𝑵𝑰𝑵𝑮 ⛅'
if (hrs >= 12 && hrs <= 17) wish = '𝑮𝑶𝑶𝑫 𝑨𝑭𝑻𝑬𝑹𝑵𝑶𝑶𝑵 🌞'
if (hrs >= 17 && hrs <= 19) wish = '𝑮𝑶𝑶𝑫 𝑬𝑽𝑬𝑵𝑰𝑵𝑮 🌥'
if (hrs >= 19 && hrs <= 23) wish = '𝑮𝑶𝑶𝑫 𝑵𝑰𝑮𝑯𝑻 🌙'


let whb = Config.WORKTYPE == 'public' ? false : true

LizaMwol.addCommand({pattern: 'alive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit Jackz
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: Config.ALIVE_BUTTON }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: Config.ALIVEBUTTON }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: ' 𝑯𝑬𝒀 𝑼𝑺𝑬𝑹 🧚‍♂️ \n ' + wish + '\n ⏲️ʙᴏᴛ ᴏɴ sɪɴᴄᴇ : ' + plk_say + '\n 📆ᴅᴀᴛᴇ : ' + plk_here + '\n\n〄 ʙᴏᴛ ɴᴀᴍᴇ : '+Config.BOTV2+'™\n〄 ᴏᴡɴᴇʀ : '+Config.OWNER+'\n〄 ᴡᴏʀᴋᴛʏᴘᴇ : '+Config.WORKTYPE+'\n〄 ʜᴀɴᴅʟᴇʀs : '+Config.HANDLERS+'\n〄 ɴᴜᴍʙᴇʀ : wa.me/'+Config.NU+'\n〄 ʙᴏᴛ ᴠᴇʀsɪᴏɴ : 1.0.0\n〄 ʟᴀɴɢᴜᴀɢᴇ : '+Config.LANG+'\n〄 ᴡᴀ ᴠᴇʀsɪᴏɴ : 14.8.7\n〄 sᴇʀᴠᴇʀ : Baileys\n〄 sᴛᴏʀᴀɢᴇ : 187GB/674678GB \n\n'+Config.ALIVEMSG+'\n',
          footerText:  '©'+Config.BOTLIZA+' ™',
          buttons: buttons,
          headerType: 1
      }
      
await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 123, status: 200, thumbnail: fs.readFileSync('./photos/Meenutty.jpeg'), surface: 200, message: Config.BOTV2, orderTitle: Config.BOTV2, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTV2 + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photos/Meenutty.jpeg')}}}});

}));
