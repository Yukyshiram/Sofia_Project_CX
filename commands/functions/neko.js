const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function neko(message) {
    try {
        let lowercase = message.body.toLowerCase();

        try {
            if (lowercase === 'neko') {

                const img = await akaneko.neko()

                const media = await MessageMedia.fromUrl(img);
    
                sofi.sendMessage(message.from, media, { caption: `🫥> Neko` });
            }
        } catch (error) {
            cx.warn('❌ debe ser el link de neko')
        }
        
    } catch (error) {
        cx.error('hubo un error en neko.js');
    }
};

module.exports = neko;