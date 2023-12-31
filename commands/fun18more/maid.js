const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function maid(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'maid') {

            const imgmore = await akaneko.nsfw.maid();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> maid` });
            } catch (error) {
                cx.warn('❌ debe ser el link de maid');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.error('hubo un error en maid.js');
    }
};

module.exports = maid;