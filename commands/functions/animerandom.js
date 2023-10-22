const { MessageMedia } = require('whatsapp-web.js');
const cx = require("consola");
const axios = require('axios');
const sofi = require('../../client');

async function animerandom(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'randomanime') {

            try {
                const declaracion = `https://api_skl.boxmine.xyz/animerandom?apikey=CX`;
                const response = await axios.get(declaracion);

                const data = response.data;

                let animename = data.AnimeRandom.AnimeName;
                let nameC = data.AnimeRandom.CharacterName;
                let animeimg = data.AnimeRandom.CharacterImage;
                let japaname = data.AnimeRandom.CharacterJapaneseName;

                const media = await MessageMedia.fromUrl(animeimg);

                await sofi.sendMessage(message.from, media, { caption: `🪷*Personaje Random*🪷\n\n🪷*Anime*🪷\n${animename}\n\n🪷*Personaje*🪷\n${nameC}\n\n🪷*Jap*🪷\n${japaname}` });

            } catch (error) {
                cx.error('Error en la solicitud de animerandom: ', error);
            }
        }
    } catch (error) {
        cx.error('Hubo un error en animerandom.js');
    }
};

module.exports = animerandom;
