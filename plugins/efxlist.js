const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'public') {

    Julie.addCommand({pattern: 'allefx', fromMe: true, desc: 'shows the full efx audio list'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        else {
            await message.client.sendMessage(message.jid,'◕‿◕FOXY ╭──────────────────╮\n╭──────────────────╯\n│ *EFX AUDIO NAME LIST* \n╰──────────────────╮      ʙᴏᴛ ɴᴀᴍᴇ : '+Config.BOTV2+'   \n╭──────────────────╯\n│⚠︎ use  .efx(number)\n│\n│efx1 = Infinity audio\n│efx2 = love again audio\n│efx3 = Jack Sparrow \n│efx4 = Infected \n│efx5 = I m beggin\n│efx6 = Wasted neoo p\n│efx7 = Infinity audio 2\n│efx8 = enakkage poranthaye tamil\n│efx9 = Devil eyes\n│efx10 = Runnin low\n│efx11 = Arcadia (skeler)\n│efx12 = No idea\n│efx13 = Go down deh\n│efx14 = Kun faya kun\n│efx15 = I love you baby\n│efx16\n│efx17 = dilmujhe de agar\n│efx18 = ambar sariya\n│efx19 = Go down deh\n│efx20 = Gun double\n│efx21 = Zaalima\n│efx22 = Middle if the night\n│efx23 = no idea\n│efx24 = industry baby\n│efx25 = kolavari d x industry baby\n│efx26 = dead to me\n│efx27 = Jarvis\n│efx28 = la espada\n│efx29 = tesher young shahrukh\n│efx30 = Lagu Kumpulan ccp\n│efx31 = chammak chalo\n│efx32 = Drop some money\n│efx33 = Itibar\n│efx34 = snehithane x in my bed\n│efx35 = naan sonnadhum\n│efx36 = munni badnaam\n│efx37 = Industry baby\n│efx38 = I dont fucking care\n│efx39 = udhungada sangu\n│efx40 = Raataan Lambiya\n│efx41 = Habibi come to Kerala\n│efx42 = Kan irandil\n│efx43 = Adiye\n╰───────────────────╮\n╭───────────────────╯\n│ _*CREATED BY JACKZ*_\n│ _*CONCEPT BY AMRU*_ \n│ ╰───────────────────╮\n╰───────────────────╯', MessageType.text);
        }
    }));
}

/*else if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'_*MEENU MWOL BY JACKZ,ABU,AMRU,FOXY*_' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n𝑯𝑬 𝑰𝑺 𝑴𝒀 𝑩𝑶𝑺𝑺😌💞', MessageType.text);
        }
    }));
}
*/
