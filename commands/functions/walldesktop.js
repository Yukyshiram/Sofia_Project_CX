const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function walld(message) {
    try {
        let lowercase = message.body.toLowerCase();

        const imgmore = await akaneko.wallpapers();

        if (lowercase === 'walld') {
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> fondo para escritorio` });
            } catch (error) {
                console.log('❌ debe ser el link de walld')
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en walld.js');
    }
};

module.exports = walld;