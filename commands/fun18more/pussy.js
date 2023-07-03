const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function pussy(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'pussy') {

            const imgmore = await akaneko.nsfw.pussy();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> pussy` });
            } catch (error) {
                cx.warn('❌ debe ser el link de pussy');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.error('hubo un error en pussy.js');
    }
};

module.exports = pussy;