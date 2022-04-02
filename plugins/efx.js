
const Jackz= require('../events');

const Config = require('../config');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

Jackz.addCommand({pattern: 'efx', fromMe: false, desc: 'It sends all efx list'}, (async (message, match) => {

const cmd =  `╭──────────────────╮ 
╭──────────────────╯
│ EFX AUDIO NAME LIST
╰──────────────────╮
                                                       
  ❏ Bᴏᴛ ɴᴀᴍᴇ : `+Config.BOTV2+`   
                                                       
╭──────────────────╯
│⚠︎ use  .efx(number)
│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
│efx1 = Infinity audio
│efx2 = love again audio
│efx3 = Jack Sparrow 
│efx4 = Infected 
│efx5 = I m beggin
│efx6 = Wasted neoo p
│efx7 = Infinity audio 2      
│efx8 = enakage poranthaye tamil
│efx9 = Devil eyes    
│efx10 = Runnin low  
│efx11 = Arcadia (skeler) 
│efx12 = No idea
│efx13 = Go down deh
│efx14 = Kun faya kun
│efx15 = I love you baby
╰───────────────────╮
╭───────────────────╯
│_*CREATED BY JACKZ*_
│_*CONCEPT BY AMRU*_
│©
╰───────────────────╮
╰───────────────────╯ 

`}))
                                                                 
            await message.client.sendMessage(message.jid, cmd, MessageType.text, { quoted: message.data });
   });
    }                                                                  
                                                                                                                                                        
