const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function tentacles(message) {
    try {
        let lowercase = message.body.toLowerCase();

        const imgmore = await akaneko.nsfw.tentacles();

        if (lowercase === 'tentacles') {
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> tentacles` });
            } catch (error) {
                console.log('❌ debe ser el link de tentacles');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en tentacles.js');
    }
};

module.exports = tentacles;