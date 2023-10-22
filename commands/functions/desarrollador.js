const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');
const { verify } = require("../../prefix");
const { createProxy } = require("../../proxy");

async function dev(message) {

    let received = message.body.toLowerCase();
    const cname = 'dev';
    const request = 'sofiajson';

    verify(received).then(resultado => {
        if (resultado.result === cname) {
            createProxy(request)
                .then(async (data) => {
                    let dev = data.jsonSofia.devDescription;

                    const logo = 'https://jesscx.boxmineworld.com/img/CX.jpg'
                    const media = await MessageMedia.fromUrl(logo);

                    sofi.sendMessage(message.from, media, { caption: `${dev}` });
                })
                .catch((error) => {
                    console.error('Error al hacer la solicitud:', error);
                });
        }
    });
}

module.exports = dev;