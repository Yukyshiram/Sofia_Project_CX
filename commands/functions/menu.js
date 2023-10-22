const { MessageMedia } = require('whatsapp-web.js');
const sofi = require("../../client");
const { verify } = require('../../prefix');
const { createProxy } = require('../../proxy');

async function menu(message) {
    let received = message.body.toLowerCase();
    const cname = 'menu';
    const cnamep = 'menú';
    const request = 'sofiajson';

    verify(received).then(resultado => {
        if (resultado.result === cname || resultado.result === cnamep) {
            createProxy(request)
                .then(async (data) => {
                    let menu = data.jsonSofia.normalmenu;
                    const media = MessageMedia.fromFilePath('./img/morada.jpg');

                    sofi.sendMessage(message.from, media, { caption: `${menu}` });
                })
                .catch((error) => {
                    console.error('Error al hacer la solicitud:', error);
                });
        }
    });
}

module.exports = menu;