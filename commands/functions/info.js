const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');

async function info(message) {

    let lowercase = message.body.toLowerCase();
    try {

        const media = MessageMedia.fromFilePath('./img/sofia.png');

        if (lowercase === 'info') {
            let info = sofi.info;

            sofi.sendMessage(message.from, media, {
                caption: `
🪷*Sobre mi*🪷
🪷Yo soy: ${info.pushname} 
🪷Mi numero: ${info.me.user}
🪷Platforma: ${info.platform} 
Soy un bot modular, 
desarrollado por: 
Im_JVallejo(Sr. Courtesy)
        `});
        }
    } catch (error) {
        console.log('Hay un error en info.js');
    }
}

module.exports = info;