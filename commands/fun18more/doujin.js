const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function doujin(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'doujin') {

            const imgmore = await akaneko.nsfw.doujin();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> doujin` });
            } catch (error) {
                cx.warn('❌ debe ser el link de doujin');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.error('hubo un error en doujin.js');
    }
};

module.exports = doujin;