const XTroid = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   XTroid.addCMD({pattern: 'gbwa', fromMe: true}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ❄️🔥 *GB WHATSAPP MOD* 🔥❄️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n');
      await message.sendMessage('\n *https://www.whatsappmods.net/2018/08/update-gbwhatsapp.html* \n');
   }));

}

else if (Config.WORKTYPE == 'public') {

   XTroid.addCMD({pattern: 'gbwa', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *GB WHATSAPP MOD* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n');
      await message.sendMessage('\n*https://www.whatsappmods.net/2018/08/update-gbwhatsapp.html*\n');
   }));
   
}
