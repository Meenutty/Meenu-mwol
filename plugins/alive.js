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
var afnplk = '```โฑ Time :' + plk_say + '```\n\n ```๐ Date :' + plk_here + '```'
var wish = ''
if (hrs >= 00 && hrs <= 12) wish = '๐ฎ๐ถ๐ถ๐ซ ๐ด๐ถ๐น๐ต๐ฐ๐ต๐ฎ โ'
if (hrs >= 12 && hrs <= 17) wish = '๐ฎ๐ถ๐ถ๐ซ ๐จ๐ญ๐ป๐ฌ๐น๐ต๐ถ๐ถ๐ต ๐'
if (hrs >= 17 && hrs <= 19) wish = '๐ฎ๐ถ๐ถ๐ซ ๐ฌ๐ฝ๐ฌ๐ต๐ฐ๐ต๐ฎ ๐ฅ'
if (hrs >= 19 && hrs <= 23) wish = '๐ฎ๐ถ๐ถ๐ซ ๐ต๐ฐ๐ฎ๐ฏ๐ป ๐'


let whb = Config.WORKTYPE == 'public' ? false : true

LizaMwol.addCommand({pattern: 'alive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit Jackz
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: Config.ALIVE_BUTTON }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: Config.ALIVEBUTTON }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: ' ๐ฏ๐ฌ๐ ๐ผ๐บ๐ฌ๐น ๐งโโ๏ธ \n ' + wish + '\n โฒ๏ธสแดแด แดษด sษชษดแดแด : ' + plk_say + '\n ๐แดแดแดแด : ' + plk_here + '\n\nใ สแดแด ษดแดแดแด : '+Config.BOTV2+'โข\nใ แดแดกษดแดส : '+Config.OWNER+'\nใ แดกแดสแดแดสแดแด : '+Config.WORKTYPE+'\nใ สแดษดแดสแดสs : '+Config.HANDLERS+'\nใ ษดแดแดสแดส : wa.me/'+Config.NU+'\nใ สแดแด แด?แดสsษชแดษด : 1.0.0\nใ สแดษดษขแดแดษขแด : '+Config.LANG+'\nใ แดกแด แด?แดสsษชแดษด : 14.8.7\nใ sแดสแด?แดส : Baileys\nใ sแดแดสแดษขแด : 187GB/674678GB \n\n'+Config.ALIVEMSG+'\n',
          footerText:  'ยฉ'+Config.BOTLIZA+' โข',
          buttons: buttons,
          headerType: 1
      }
      
await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 123, status: 200, thumbnail: fs.readFileSync('./photos/Meenutty.jpeg'), surface: 200, message: Config.BOTV2, orderTitle: Config.BOTV2, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTV2 + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photos/Meenutty.jpeg')}}}});

}));
