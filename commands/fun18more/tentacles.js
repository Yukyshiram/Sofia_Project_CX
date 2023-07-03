const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function tentacles(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'tentacles') {

            const imgmore = await akaneko.nsfw.tentacles();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> tentacles` });
            } catch (error) {
                cx.warn('❌ debe ser el link de tentacles');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.warn('hubo un error en tentacles.js');
    }
};

module.exports = tentacles;