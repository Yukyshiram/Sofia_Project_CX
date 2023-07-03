const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function succubus(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'succubus') {

            const imgmore = await akaneko.nsfw.succubus();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> succubus` });
            } catch (error) {
                cx.warn('❌ debe ser el link de succubus');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.error('hubo un error en succubus.js');
    }
};

module.exports = succubus;