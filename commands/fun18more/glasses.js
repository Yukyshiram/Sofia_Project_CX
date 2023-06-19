const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function glasses(message) {
    try {
        let lowercase = message.body.toLowerCase();

        const imgmore = await akaneko.nsfw.glasses();

        if (lowercase === 'glasses') {
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> glasses` });
            } catch (error) {
                console.log('❌ debe ser el link de glasses');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en glasses.js');
    }
};

module.exports = glasses;