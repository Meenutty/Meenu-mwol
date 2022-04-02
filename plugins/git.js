const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "it sends bot deploying link"

const GN = "it sends bot deploying link"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "*https://github.com/Jackz-ser/Angelina*"; 
 
    var i = Math.floor(1*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));
    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

                 r_text[0] = "*BOT GIT : github.com/Meenutty/Meenu-mwol*\n\n\n*DEVELOPERS*\n\n*Foxy ser : wa.me/919400490452*\n*Abu ser : wa.me/917025994178*\n*Amru ser : wa.me/917025631103*\n*Jackz ser : wa.me/918075641889*"; 

                     var i = Math.floor(1*Math.random())

                         await message.client.sendMessage(

                               message.jid,(r_text[i]), MessageType.text);

    }));
    

   }
