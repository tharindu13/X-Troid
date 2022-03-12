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
      var image = await axios.get ('https://telegra.ph/file/e115d1bda25210ddba9ec.jpg', {responseType: 'arraybuffer'})
      await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: ` X-troid  Whatsapp Bot`,quoted: message.data})
   }));

}

else if (Config.WORKTYPE == 'public') {

   XTroid.addCMD({pattern: 'fmwa', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ❄️🔥 *FM WHATSAPP MOD* 🔥❄️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n');
      await message.sendMessage('\n*https://drive.google.com/file/d/1ekCssDV_9kRL4mKoFe5_XKKvqI8guWzY/view*\n');
      var image = await axios.get ('https://telegra.ph/file/e115d1bda25210ddba9ec.jpg', {responseType: 'arraybuffer'}
      await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: ` X-troid  Whatsapp Bot`,quoted: message.data})
   }));
   
}
