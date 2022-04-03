const axios = require ('axios');
const {addCommand} = require('../events');
addCommand({ pattern: 'true ?(.*)', fromMe: true, desc: "get number details" }, async (fasil, sourav) => {
var number = sourav || fasil.reply_message.jid
var {data} = await axios(`https://raganork-api.herokuapp.com/api/truecaller?text=in&username=${number}&apikey=souravkl11`);
var result = data.result.data[0] == 'error' ? 'Limit over (10/10). Wait for tomorrow' : data.result.data[0]
await fasil.sendMessage(result)
})
