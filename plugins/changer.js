/* Copyright (C) 2020 Jackz. 
*/

const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

 var plk_desc = ''
 var BGM_ONE = ''
 var BGM_TWO = ''
 var BGM_EFX = ''
 //efx audio mode copyright by Jackz and Amru
  if (config.LANG == 'EN') {
    
    plk_desc = 'change reply message BGM mode'
    BGM_ONE = '_*BGM TYPE CHANGED TO MODE 1*_'
    BGM_TWO = '_*BGM TYPE CHANGED TO MODE 2*_'
    BGM_EFX = '_*ACTIVATED EFX AUDIO MODE*_'
    }

    if (config.LANG == 'ML') {
      
      plk_desc = 'മറുപടി bgm മോഡ് മാറ്റാൻ'
      BGM_ONE = '𝐁𝐆𝐌 തരം ഒന്നാം മോഡിലേക്ക് മാറ്റി'
      BGM_TWO = '𝐁𝐆𝐌 തരം രണ്ടാം മോഡിലേക്ക് മാറ്റി'
    }

 Asena.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: plk_desc, usage: '.bgm one / two / efx' }, (async (message, match) => {
        if (match[1] == 'two') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'two'
                    } 
                });
                await message.sendMessage(BGM_TWO,BGM_EFX)
        } else if (match[1] == 'efx') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'efx'
                    } 
                });
                await message.sendMessage(BGM_ONE,BGM_TWO)
        } else if (match[1] == 'one') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'one'
                    } 
                });
                await message.sendMessage(BGM_ONE,BGM_EFX)
        }
    }));
