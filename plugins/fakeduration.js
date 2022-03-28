
//whitedevil  and saidali

const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;


 var AT = ''
 var ATO = ''
 var TO = ''

  if (config.LANG == 'EN') {

    AT = '*FAKE BGM DURATION IS ON*'
     ATO = '*FAKE BGM DURATION IS OFF*'
     TO = '*FAKE BGM DURATION IS OFF*'
    }

    if (config.LANG == 'ML') {

     AT = '*FAKE BGM DURATION IS ON*'
     ATO = '*FAKE BGM DURATION IS OFF*'
     TO = '*FAKE BGM DURATION IS OFF*'
    }

 Asena.addCommand({pattern: 'fbgm ?(.*)', fromMe: true,dontAddCommandList: true,desc: 'change fake bgm on/true/off. example - .fbgm off/on/true' }, (async (message, match) => {
        if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_DURATION']: '7280542'
                    } 
                });
                await message.sendMessage(AT)
        } else if (match[1] == 'true') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_DURATION']: 'true'
                    } 
                });
                await message.sendMessage(ATO)
        } else if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_DURATION']: 'false'
                    } 
                });
                await message.sendMessage(TO)
        } 
    }));
