const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function masturbation(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'masturbation') {

            const imgmore = await akaneko.nsfw.masturbation();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> masturbation` });
            } catch (error) {
                console.log('❌ debe ser el link de masturbation');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        console.log('hubo un error en masturbation.js');
    }
};

module.exports = masturbation;