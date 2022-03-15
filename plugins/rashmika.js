const xTroid = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Config = require('../config');

if (Config.WORKTYPE == 'public') {

    xTroid.addCMD({pattern: 'rashmika', fromMe: false, desc: 'Download Rashmika Images'}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://i.ibb.co/kQK3T8T/wp4050675-rashmika-mandanna-wallpapers.jpg";

r_text[1] = "https://i.ibb.co/qkG1mXb/wp4050687-rashmika-mandanna-wallpapers.jpg";

r_text[2] = "https://i.ibb.co/ZVv2Zcs/wp4050692-rashmika-mandanna-wallpapers.jpg";

r_text[3] = "https://i.ibb.co/CmLqn9r/wp4050711-rashmika-mandanna-wallpapers.jpg";

r_text[4] = "https://i.ibb.co/8dDzP65/wp4050725-rashmika-mandanna-wallpapers.jpg";

r_text[5] = "https://i.ibb.co/GtrjsB4/wp4050727-rashmika-mandanna-wallpapers.jpg";

r_text[6] = "https://i.ibb.co/Ct3gnGP/wp4050729-rashmika-mandanna-wallpapers.jpg";

r_text[7] = "https://i.ibb.co/HKDhMzp/wp4050731-rashmika-mandanna-wallpapers.jpg";

r_text[8] = "https://i.ibb.co/6YVs3pT/wp4050736-rashmika-mandanna-wallpapers.jpg";

r_text[9] = "https://i.ibb.co/kDcvT8f/wp4050749-rashmika-mandanna-wallpapers.jpg";

r_text[10] = "https://i.ibb.co/TR8rBQh/wp4050753-rashmika-mandanna-wallpapers.jpg";

r_text[11] = "https://i.ibb.co/BcTYMMT/wp4050774-rashmika-mandanna-wallpapers.jpg";

r_text[12] = "https://i.ibb.co/vk5g1Cq/wp4050778-rashmika-mandanna-wallpapers.jpg";

r_text[13] = "https://i.ibb.co/k9c3RzK/wp4050802-rashmika-mandanna-wallpapers.jpg";

var i = Math.floor(14*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' *XTroid Corded by Thinuwa* 🔥'})

    }));

}
