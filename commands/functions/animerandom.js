const randomChar = require('anime-character-random');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function animerandom(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'randomanime') {
            try {
                const haber = await randomChar.GetChar();

                const animename = haber.AnimeName;
                const name = haber.CharacterName;
                const animeimg = haber.CharacterImage;
                const japaname = haber.CharacterJapaneseName;

                const media = await MessageMedia.fromUrl(animeimg);

                sofi.sendMessage(message.from, media, { caption: `🪷*Personaje Random*🪷\n\n🪷*Anime*🪷\n${animename}\n\n🪷*Personaje*🪷\n${name}\n\n🪷*Jap*🪷\n${japaname}` });
            } catch (error) {
                cx.warn('❌ debe ser el link de animerandom')
                message.react('✖️');
            }
        }

    } catch (error) {
        cx.error('hubo un error en animerandom.js');
    }
};

module.exports = animerandom;