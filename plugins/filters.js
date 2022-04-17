/* Copyright (C) 2020 farhan-dqz.
julie 
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918075641889@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/Fayas.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        
const array = ['alive','pushpa','Food','Owner','Bye','Poda','help','Amruser','Da','Happy','Hai','Help','Hi','Hlo','Jackz','jackz','Kozhi','Love','Myr','Myre','Name','ban','bgm','ban','com','group','ayye','Theertha','Romantic','Adhuz','carlo','Carlo','Ooh','frnd','Theja','sathan','Sathan','theja','wizard','Wizard','ooh','Kk','Rafi','rafi','thug','anjali','Anjali','Sed','sed','sad','Love','love','Line','line','Jackz','jackz','Broken','broken','Angelina','angelina','single','Single','Commited','Hi','poda','poli','ayin','Ayin','ayn','vilachil','sense','Mukesh','idiot','Cyber','cyber','tyr','thyr','Thyr','budhi','Myre','myre','Aara','kundan','Kundan','Thug','trance','Trance','aara','Food','food','fud','Fud','Nee','nee','happy','Happy','Sinan','Dud','Photo','photo','fan','Fan','Gd nyt','gd nyt','koi','Koi','vatt','Vatt','ara','Ara','name','Name','pinnalla','Pinnalla','Hai','Reply','reply','thall','Thall','Song','kozhi','Kozhi','I love you','mass','Mass','arulle','Arulle','Mirash','mirash','Mirash bgm','Salman','Arshi','Ezra','ezra','nihal','Nihal','sticker','sufaid','Sufaid','jinn','Jinn','Feel','lub','Lub','foxy','Foxy','Music','music','CR7','Alan','Halo','Aysheri','aysheri','kooi','Kooi','Achumon','ith','🔥','bye','para','Para','mentionameen','Khais','mukesh','Hlo','hlo','njan','Njan','muthe','Muthe','Xxxtentacion','alone','Alone','Converting','potta','Potta','menu','welcome','Welcome','vannu','Vannu','Remove','kyat','rip','remix','Remix','Rip','Myr','dj','Dj','pever','Pever','Oo','XXXTENTACION','Love u','hate','Hate','Njan vannu','tto','Audio','audio','veno','xxxtentacion','Veno','nanban','Ayye','Ronaldo','ronaldo','katha','hy','vaanam','Vaanam','Vanam','Ivan','ivan','Annan','annan','Thayoli','umbi','Umbi','Noob','noob','Nanban','Achu','achu','Ok','Ameen','Shiva','ok','Enth','ameen','enth','nth','Edi','kundi','Kundi','Uff','Dey','Cr7','Poda','Poli','Pm','Plzz','girl','Oi','mp3','nirth','Nirth','good nyt','birthday','HBD','bdy','Birthday','Pattula','Good night','Nth','Mood','Please','Mm','Dance','Ith','thech','caption','Polikk','Aah','Good nyt','Mrng','alive','Di','Bro','avan','converting','Allah','bg','help','Hii','odiko','oho','killadi','oo','Fuck','invite','Bgm','Owner','Group','list','man','Nanba','oii','yo','sad','work','set','remove','thukum','poko','xmedia','commands','Boss','vava','Lalitha','start','sing','Hello','Bye','warn','Baby','who','find','power','myr','vanam','tagall','Re entry','pass','patti','phaa','mone','look','bor','try','owner','luv','feel','romam','potte','no replay','bgm','vijay','Da','Vazha','kunna','Kunna','Sorry','Sry','sorry','sry','Bot','bot','song','Uyir','uyir','thayoli','Hy','Sad','Ayn','BRKNOFC','basil','Brokenofc','jackzser','adhuz'] 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./bgmone/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
if (Config.GEAR == 'efx') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918075641889@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./efxaudio/efx4.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./efxaudio/efx5.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        
const array = ['efx1','efx2','efx3','efx4','efx5','efx6','efx7','efx8','efx9','efx10','efx11','efx12','efx13','efx14','efx15','efx16','efx17','efx18','efx19','efx20','efx21','efx22','efx23','efx24','efx25','efx26','efx27','efx28','efx29','efx30','efx31','efx32','efx33','efx34','efx35','efx36','efx37','efx38','efx39','efx40','efx41','efx42','efx43','efx44','efx45'] 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./efxaudio/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        var uri = encodeURI(match[1])
const array = ['Hi','Fek','Ariyo','Ayn','Aysheri','Ayye','Baby','Bot','Chill','Da','Delete','Enth','Eppadi','Ethi','Happy','Hehe','Hello','Help','Hlo','How','Kali','Kd','King','Kollum','Kopp','Kundan','Life','Line','Love','Lover','Muthe','Myr','Nallath','Nice','Orakkam','Paatt','Para','Poda','Povoola','Pro','Pwoli','Remove','Sad','Scene','Sed','Sheri','Sherikkum','Single','Thanne','Thund','Vaa','Vanno','Vannu','Vere bot','Wait','Why','ariyo','ayn','aysheri','ayye','baby','chill','da','delete','enth','eppadi','ethi','happy','hehe','hello','help','hlo','how','kali','kd','king','kollum','kopp','kundan','leave','life','line','love','mrng','muthe','myr','nallath','nice','njan','orakkam','paatt','para','poda','podo','povoola','pro','pwoli','remove','sad','scene','sed','sheri','sherikkum','single','tagall','thanne','thund','vaa','vanno','vannu','vere bot','wait','why','Pinky','hi']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: true },quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Alone','Ariyo','Ayin','Bie','Bomb','Bot','Bote','Cute','Hate','Hi','Hoi','Lub','Myr','Myre','Oh','Poda','Police','Poocha','Sed','Work','Wow','Z','aara','aayo','air','alla','alone','anthas','ariyo','ayin','aysheri','bie','bye','charge','chathu','cheyalle','chunk','colony','committed','cute','dance','dead','eda','eh','entha','exam','fan','fans','girl','girls','give','hate','hi','hlo','hoi','important','indo','killadi','kozhi','kunna','kutti','list','love','madthu','mama','marichu','mention','mood','morning','muthe','myr','myre','nee alle','njan','number','oh','ok','oombi','ooo','pedicho','pever','pidi','pm','powersh','powli','poyi','remove','sad','saved','scene','search','sed','shaad','sheri','shut','sry','teach','test','thech','think','thund','uff','umma','uyir','vada','vannu','vibe','work','wow','z','Name','Njan']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./media/stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
     Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {

        if(Config.THERI_KICK){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
    await message.client.sendMessage(message.jid,'you used a bad word that we dont allow here \n -admin panal ', MessageType.text, {quoted: message.data });  
    await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));

