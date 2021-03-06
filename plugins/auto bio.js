/* Copyright (C)  2020  chunkindepadayali

 */

const Raashii = require('../events');

const config = require('../config');

const Heroku = require('heroku-client');

const heroku = new Heroku({

  token: config.HEROKU.API_KEY

});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

var rashi_desc = ''

var OFF = ''

var ON = ''

if (config.LANG == 'EN') {

  rashi_desc = 'change Auto bio mode'

  OFF = '๐จ๐ผ๐ป๐ถ ๐ฉ๐ฐ๐ถ ๐ป๐ผ๐น๐ต๐ฌ๐ซ ๐ถ๐ญ๐ญ \n        ๐ท๐ณ๐ฌ๐จ๐บ๐ฌ ๐พ๐จ๐ฐ๐ป..๐งโโ๏ธ'

  ON = '๐จ๐ผ๐ป๐ถ ๐ฉ๐ฐ๐ถ ๐ป๐ผ๐น๐ต๐ฌ๐ซ ๐ถ๐ต \n         ๐ท๐ณ๐ฌ๐จ๐บ๐ฌ ๐พ๐จ๐ฐ๐ป.. ๐งโโ๏ธ'

}

if (config.LANG == 'ML') {

  rashi_desc = 'Auto bio mode เดฎเดพเดฑเตเดฑเดพเตป'

  OFF = '*AUTO BIO OFF เดเดเตเดเดฟ๐*'

  ON = '*AUTO BIO ON เดเดเตเดเดฟ๐*'

}

Raashii.addCommand({ pattern: 'autobio ?(.*)', fromMe: true, desc: rashi_desc, usage: '.autobio on / off' }, (async (message, match) => {

  if (match[1] == 'off') {

    await heroku.patch(baseURI + '/config-vars', {

      body: {

                        ['AUTO_BฤฐO']: 'false'

      }

    });

    await message.sendMessage(OFF)

  } else if (match[1] == 'on') {

    await heroku.patch(baseURI + '/config-vars', {

      body: {

                        ['AUTO_BฤฐO']: 'true'

      }

    });

    await message.sendMessage(ON)

  }

}));
