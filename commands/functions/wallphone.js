const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function wallp(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'wallp') {

            const imgmore = await akaneko.mobileWallpapers();

            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> fondo para celular` });
            } catch (error) {
                cx.warn('❌ debe ser el link de wallp')
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.error('hubo un error en wallp.js');
        //console.log(error);
    }
};

module.exports = wallp;