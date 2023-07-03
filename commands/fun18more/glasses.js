const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function glasses(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'glasses') {

            const imgmore = await akaneko.nsfw.glasses();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> glasses` });
            } catch (error) {
                cx.warn('❌ debe ser el link de glasses');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.warn('hubo un error en glasses.js');
    }
};

module.exports = glasses;