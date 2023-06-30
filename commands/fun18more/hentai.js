const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function hentai(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'hentai') {

            const imgmore = await akaneko.nsfw.hentai();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> hentai` });
            } catch (error) {
                console.log('❌ debe ser el link de hentai');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en hentai.js');
    }
};

module.exports = hentai;