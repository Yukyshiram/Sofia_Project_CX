const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function pussy(message) {
    try {
        let lowercase = message.body.toLowerCase();

        const imgmore = await akaneko.nsfw.pussy();

        if (lowercase === 'pussy') {
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> pussy` });
            } catch (error) {
                console.log('❌ debe ser el link de pussy');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en pussy.js');
    }
};

module.exports = pussy;