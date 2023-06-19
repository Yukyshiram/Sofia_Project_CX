const randomChar = require('anime-character-random');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function animerandom(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'randomanime') {
            try {
                const haber = await randomChar.GetChar();

                // console.log(await haber.AnimeName);
                // console.log(await haber.CharacterName);
                // console.log(await haber.CharacterImage);
                // console.log(await haber.CharacterJapaneseName);

                const animename = haber.AnimeName;
                const name = haber.CharacterName;
                const animeimg = haber.CharacterImage;
                const japaname = haber.CharacterJapaneseName;

                const media = await MessageMedia.fromUrl(animeimg);

                sofi.sendMessage(message.from, media, { caption: `🪷*Personaje Random*🪷\n\n🪷*Anime*🪷\n${animename}\n\n🪷*Personaje*🪷\n${name}\n\n🪷*Jap*🪷\n${japaname}` });
            } catch (error) {
                console.log('❌ debe ser el link de animerandom')
                message.react('✖️');
            }
        }

    } catch (error) {
        console.log('hubo un error en animerandom.js');
    }
};

module.exports = animerandom;