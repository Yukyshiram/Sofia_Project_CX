const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");
const { verify } = require("../../prefix");
const { createProxyText } = require("../../proxy");

async function dallegtp(message) {
    let received = message.body.toLowerCase();
    const cname = 'eris';
    const request = 'dalle';

    verify(received).then(resultado => {

        if (resultado.result === cname && resultado.secondText !== null) {
            const peticion = resultado.secondText;
            cx.start(`Usuario a dall-e: ${peticion}`);

            createProxyText(request, peticion)
                .then(async (data) => {
                    const url = data.Openai.TextFromOpenai

                    const media = await MessageMedia.fromUrl(url);
                    sofi.sendMessage(message.from, media, { caption: `🪷*Resultado*🪷\n\n> ${peticion}` });
                    cx.success('Enviando, aguarde un momento :3');
                })
                .catch((error) => {
                    cx.error('hubo un error en dallegtp.js\n' + error);
                });
        } else if (resultado.result === cname && resultado.secondText === null) {
            message.reply('🪷Requiere un texto despues de /Eris, ejemplo /eris mujer, cabello cafe, lentes');
        }
    })
}

module.exports = dallegtp;