const { Configuration, OpenAIApi } = require("openai");
const { consola } = require("consola");
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function dallegtp(message) {
    let lowercase = message.body.toLowerCase()
    if (lowercase.startsWith('eris')) {

        const words = message.body.split(' ');
        if (words.length >= 2) {
            try {
                const peticion = words.slice(1).join(' ');
                cx.start(`Usuario a dall-e: ${peticion}`);

                const configuration = new Configuration({
                    apiKey: "", //aqui debo de ser muy claro,si la api esta al limite aunque sea nueva soltara un error muy largo en consola, yo recomiendo crear una nueva cuenta y luego poner la api
                });

                const openai = new OpenAIApi(configuration);

                const prompt = `${peticion}`;
                const numberOfImages = 1;
                const imageSize = "1024x1024";

                try {
                    async function runCompletion() {
                        await openai.createImage({
                            prompt: prompt,
                            n: numberOfImages,
                            size: imageSize
                        }).then(async (data) => {
                            //console.log(data.data.data[0].url);
                            const url = data.data.data[0].url;

                            const media = await MessageMedia.fromUrl(url);
                            sofi.sendMessage(message.from, media, { caption: `🪷*Resultado*🪷\n\n> ${peticion}` });
                            cx.success('Enviando, aguarde un momento :3');
                        })
                    }
                    runCompletion();
                } catch (error) {
                    cx.warn();('tenemos un error de img con dall-e')
                }
            } catch (error) {
                cx.warn('hubo un error en dallegpt.js');
            }
        } else {
            cx.info('Requiere un texto despues de Eris, ejemplo eris mujer, cabello cafe, lentes');
            message.reply('🪷Requiere un texto despues de Eris, ejemplo eris mujer, cabello cafe, lentes');
        }
    }
}


module.exports = dallegtp;