const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function nekox(message) {
    try {
        let lowercase = message.body.toLowerCase();

        const imgmore = await akaneko.nsfw.ass();

        if (lowercase === 'ass') {
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> ass` });
            } catch (error) {
                console.log('❌ debe ser el link de ass');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en nekox.js');
    }
};

module.exports = nekox;