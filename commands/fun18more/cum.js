const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function cum(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'cum') {

            const imgmore = await akaneko.nsfw.cum();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> cum` });
            } catch (error) {
                console.log('❌ debe ser el link de cum');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en cum.js');
    }
};

module.exports = cum;