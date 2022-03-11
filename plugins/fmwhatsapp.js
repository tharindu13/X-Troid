const XTroid = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   XTroid.addCMD({pattern: 'fmwa', fromMe: true}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ❄️🔥 *FM WHATSAPP MOD* 🔥❄️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n');
      await message.sendMessage('\n*https://drive.google.com/file/d/1ekCssDV_9kRL4mKoFe5_XKKvqI8guWzY/view*\n');
   }));

}

else if (Config.WORKTYPE == 'public') {

   XTroid.addCMD({pattern: 'fmwa', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ❄️🔥 *FM WHATSAPP MOD* 🔥❄️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n');
      await message.sendMessage('\n*https://drive.google.com/file/d/1ekCssDV_9kRL4mKoFe5_XKKvqI8guWzY/view*\n');
   }));
   
}
