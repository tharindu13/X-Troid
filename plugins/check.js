const xTroid = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const {spawnSync} = require('child_process');

const Config = require('../config');

const chalk = require('chalk');

const axios = require('axios');

if (Config.WORKTYPE == 'public') {

    xTroid.addCMD({pattern: 'check', fromMe: false,  deleteCommand: false }, (async (message, match) => {

            var image = await axios.get ('https://telegra.ph/file/393835260c0fbf63b9f3b.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: ` *Confirmed X-Troid  User 2022©* `,quoted: message.data})

    }));
