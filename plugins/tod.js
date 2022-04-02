const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
module.exports = xeon = async (xeon, mek) => {
          case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Play again?', buttons: buttons, headerType: 1 }
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{})
              xeon.relayWAMessage(prep)
              break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Play again?', buttons: buttons, headerType: 1 }
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{})
              xeon.relayWAMessage(prep)
              break
          case 'tod':
          case 'truth':
          case 'dare':
              result =`*Truth Or Dare*\nPlayers are given a choice between answering questions honestly, or taking on the challenge given`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Truth or Dare?', buttons: buttons, headerType: 1 }
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:ftex})
              xeon.relayWAMessage(prep)
              break
  }
