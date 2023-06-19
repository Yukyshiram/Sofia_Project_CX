const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function bdsm(message) {
    try {
        let lowercase = message.body.toLowerCase();

        const imgmore = await akaneko.nsfw.bdsm();

        if (lowercase === 'bdsm') {
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> bdsm` });
            } catch (error) {
                console.log('❌ debe ser el link de bdsm');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en bdsm.js');
    }
};

module.exports = bdsm;