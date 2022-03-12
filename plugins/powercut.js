const XTroid = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   XTroid.addCMD({pattern: 'powercut', fromMe: true}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘https://cebcare.ceb.lk/Incognito/OutageMap 〙\n┗━━━━━━━━━━━━━━━━━━━\n');
      await message.sendMessage('\*සර්ත් එක්ක බෑ නේද 😂💔 ඔය උඩ තියෙන ලින්ක් එක ඔබලා ඔයාලගෙ ලයිට් බිලේ එන අන්ක 10ක අන්කෙ ගහලා සර්ච් දෙන්න.ඔයාලට ලයින් කැපෙන වෙලාව ප්‍රස්තාරෙ වැටෙයි.*\n');
   }));

}

else if (Config.WORKTYPE == 'public') {

   XTroid.addCMD({pattern: 'powercut', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 https://cebcare.ceb.lk/Incognito/OutageMap 〙\n┗━━━━━━━━━━━━━━━━━━━\n');
      await message.sendMessage('\n*සර්ත් එක්ක බෑ නේද 😂💔 ඔය උඩ තියෙන ලින්ක් එක ඔබලා ඔයාලගෙ ලයිට් බිලේ එන අන්ක 10ක අන්කෙ ගහලා සර්ච් දෙන්න.ඔයාලට ලයින් කැපෙන වෙලාව ප්‍රස්තාරෙ වැටෙයි.*\n');
   }));
   
}
