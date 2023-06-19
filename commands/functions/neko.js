const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function neko(message) {
    try {
        let lowercase = message.body.toLowerCase();

        const img = await akaneko.neko()

        try {
            if (lowercase === 'neko') {

                const media = await MessageMedia.fromUrl(img);
    
                sofi.sendMessage(message.from, media, { caption: `🫥> Neko` });
            }
        } catch (error) {
            console.log('❌ debe ser el link de neko')
        }
        
    } catch (error) {
        console.log('hubo un error en neko.js');
    }
};

module.exports = neko;