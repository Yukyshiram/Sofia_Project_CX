const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function succubus(message) {
    try {
        let lowercase = message.body.toLowerCase();

        const imgmore = await akaneko.nsfw.succubus();

        if (lowercase === 'succubus') {
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> succubus` });
            } catch (error) {
                console.log('❌ debe ser el link de succubus');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en succubus.js');
    }
};

module.exports = succubus;