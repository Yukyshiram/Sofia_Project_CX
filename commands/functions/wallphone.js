const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function wallp(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'wallp') {

            const imgmore = await akaneko.mobileWallpapers();

            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> fondo para celular` });
            } catch (error) {
                console.log('❌❌ debe ser el link de wallp')
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en wallp.js');
        //console.log(error);
    }
};

module.exports = wallp;