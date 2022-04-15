const jackz = require('../events')
const Config = require('../config')
const {WORKTYPE} = require('../config');
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
let w = WORKTYPE =='public'?false:true
jackz({pattern: 'tod', fromMe: w, desc: 'Truth Or Dare Game'}, (async (message, match) => {
const templateButtons = [
  {index: 1, quickReplyButton: {displayText: 'TRUTH', id: 'truth'}},
  {index: 2, quickReplyButton: {displayText: 'DARE', id: 'dare'}}
]

const buttonMessage = {
    text: "*Truth Or Dare*\nPlayers are given a choice between answering questions honestly, or taking on the challenge given",
    footer: Config.BOTV2,
    templateButtons: templateButtons,
    image: {url: 'https://i.imgur.com/xerZo68.jpeg'}
}

await message.client.sendMessage(message.jid, buttonMessage)
}))
jackz({on: 'button', fromMe: w, desc: 'Truth or dare'}, (async (message, match) => {
await message.client.sendMessage(message.jid, { text: JSON.stringify(message) },{ quoted: message.data })	
if (message.tembutton === 'truth') await message.client.sendMessage(message.jid, { text: truth },{ quoted: message.data })
	if (message.tembutton === 'dare') await message.client.sendMessage(message.jid, { text: dare },{ quoted: message.data })
 
}))
