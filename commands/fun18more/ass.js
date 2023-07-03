const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function nekox(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'ass') {

            const imgmore = await akaneko.nsfw.ass();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> ass` });
            } catch (error) {
                cx.warn('❌ debe ser el link de ass');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.error('hubo un error en ass.js');
    }
};

module.exports = nekox;