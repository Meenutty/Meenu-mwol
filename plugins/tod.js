const jackz = require('../events')
const Config = require('../config')
const {WORKTYPE} = require('../config');
let w = WORKTYPE =='public'?false:true
jackz.addCommand({pattern: 'tod', fromMe: w, desc: 'Truth Or Dare Game'}, (async (message, match) => {
	
         var r_text = newArray ();
	
r_text[0] = "Have you ever liked anyone? How long?";
r_text[1] = "If you can or if you want; which gc/outside gc would you make friends with? (maybe different/same type)";
r_text[2] = "apa ketakutan terbesar kamu?";
r_text[3] = "Have you ever liked someone and felt that person likes you too?";
r_text[4] = "What is the name of your friend's ex-girlfriend that you used to secretly like?";
r_text[5] = "Have you ever stolen money from your father or mom? The reason?";
r_text[6] = "What makes you happy when you're sad?";
r_text[7] = "Ever had a one sided love? if so who? how does it feel bro?"; 
r_text[8] = "been someone's mistress?";
r_text[9] = "the most feared thing";
r_text[10] = "Who is the most influential person in your life?";
r_text[11] = "what proud thing did you get this year"; 
r_text[12] = "Who is the person who can make you awesome"; 
r_text[13] = "Who is the person who has ever made you very happy?"; 
r_text[14] = "Who is closest to your ideal type of partner here"; 
r_text[15] = "Who do you like to play with??"; 
r_text[16] = "Have you ever rejected people? the reason why?";
r_text[17] = "Mention an incident that made you hurt that you still remember"; 
r_text[18] = "What achievements have you got this year??";
r_text[19] = "What's your worst habit at school??";
r_text[20] = "What song do you sing most in the shower";
r_text[21] = "Have you ever had a near-death experience";
r_text[22] = "When was the last time you were really angry. Why?";
r_text[23] = "Who is the last person who called you";
r_text[24] = "Do you have any hidden talents, What are they";
r_text[25] = "What word do you hate the most?";
r_text[26] = "What is the last YouTube video you watched?";
r_text[27] = "What is the last thing you Googled";
r_text[28] = "Who in this group would you want to swap lives with for a week";
r_text[29] = "What is the scariest thing thats ever happened to you";
r_text[30] = "Did you know Jackz";
r_text[31] = "When is the last time you made someone else cry";
r_text[32] = "Have you ever ghosted a friend";
r_text[33] = "Have you ever seen a dead body";
r_text[34] = "Which of your family members annoys you the most and why";
r_text[35] = "If you had to delete one app from your phone, which one would it be";
r_text[36] = "What app do you waste the most time on";
r_text[37] = "Have you ever faked sick to get home from school";
r_text[38] = "What is the most embarrassing item in your room";
r_text[39] = "What five items would you bring if you got stuck on a desert island";
r_text[40] = "Have you ever laughed so hard you peed your pants";
r_text[41] = "Is this group usefull";
r_text[42] = "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£";
r_text[43] = "What is the biggest mistake you have ever made";
r_text[44] = "Have you ever cheated in an exam";
r_text[45] = "What is the worst thing you have ever done";
r_text[46] = "When was the last time you cried";
r_text[47] = "whom do you love the most among ur parents"; 
r_text[48] = "do u sometimes put ur finger in ur nosetrilðŸ¤£"; 
r_text[49] = "who was ur crush during the school days";
r_text[50] = "tell honestly, do u like any boy in this grup";
r_text[51] = "have you ever liked anyone? how long?";
r_text[52] = "do you have gf/bf, what is your biggest fear?";
r_text[53] = "have you ever liked someone and felt that person likes you too?";
r_text[54] = "What is the name of your ex boyfriend of your friend that you once liked quietly?";
r_text[55] = "ever did you steal your mothers money or your fathers money";
r_text[56] = "what makes you happy when you are sad";
r_text[57] = "do you like someone who is in this group? if you then who?";
r_text[58] = "have you ever been cheated on by people?";
r_text[59] = "who is the most important person in your life";
r_text[60] = "what proud things did you get this year";
r_text[61] = "who is the person who can make you happy when u r sad";
r_text[62] = "who is the person who ever made you feel uncomfortable";
r_text[63] = "have you ever lied to your parents";
r_text[64] = "do you still like ur ex";
r_text[65] = "who do you like to play together with?";
r_text[66] = "have you ever stolen big thing in ur life? the reason why?";
r_text[67] = "Mention the incident that makes you hurt that you still remember";
r_text[68] = "what achievements have you got this year?";
r_text[69] = "what was your worst habit at school?";
r_text[70] = "do you love the bot creator, Jackz?ðŸ¦„";
r_text[71] = "have you ever thought of taking revenge from ur teacher?";
r_text[72] = "do you like current prime minister of ur country";
r_text[73] = "you non veg or veg";
r_text[74] = "if you could be invisible, what is the first thing you would do";
r_text[75] = "what is a secret you kept from your parents";
r_text[76] = "Who is your secret crush";
r_text[77] = "who is the last person you creeped on social media";
r_text[78] = "If a genie granted you three wishes, what would you ask for";
r_text[79] = "What is your biggest regret";
r_text[80] = "What animal do you think you most look like";
r_text[81] = "How many selfies do you take a day";
r_text[82] = "What was your favorite childhood show";
r_text[83] = "if you could be a fictional character for a day, who would you choose";
r_text[84] = "whom do you text the most";
r_text[85] = "What is the biggest lie you ever told your parents";
r_text[86] = "Who is your celebrity crush";
r_text[87] = "Whats the strangest dream you have ever had";
r_text[88] = "do you play FreeFire ,if you then send ur id number"
	
	var i = Math.floor(89*Math.random())
	
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
jackz.addCommand({on: 'button', fromMe: w, desc: 'Truth or dare'}, (async (message, match) => {
await message.client.sendMessage(message.jid, { text: JSON.stringify(message) },{ quoted: message.data })	
if (message.tembutton === 'truth') await message.client.sendMessage(message.jid, { text: `$r_text[i]` },{ quoted: message.data })
	if (message.tembutton === 'dare') await message.client.sendMessage(message.jid, { text: dare },{ quoted: message.data })
 
}))
