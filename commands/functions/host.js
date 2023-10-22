const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');
const { verify } = require("../../prefix");
const { createProxy } = require("../../proxy");

async function host(message) {

    let received = message.body.toLowerCase();
    const cname = 'host';
    const request = 'sofiajson';

    verify(received).then(resultado => {
        if (resultado.result === cname) {
            createProxy(request)
                .then(async (data) => {
                    let host = data.jsonSofia.Host;

                    const media = MessageMedia.fromFilePath('./img/logoboxmine.jpg');

                    sofi.sendMessage(message.from, media, { caption: `${host}` });
                })
                .catch((error) => {
                    console.error('Error al hacer la solicitud:', error);
                });
        }
    });
}

module.exports = host;