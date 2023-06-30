const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function foxgirl(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'foxgirl') {

            const imgmore = await akaneko.nsfw.foxgirl();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> foxgirl` });
            } catch (error) {
                console.log('❌ debe ser el link de foxgirl');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en foxgirl.js');
    }
};

module.exports = foxgirl;