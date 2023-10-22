const { verify } = require('../../prefix');
const { createProxy } = require('./../../proxy');

async function gracias(message) {
    let received = message.body.toLowerCase();
    const cname = 'gracias';
    const request = 'sofiajson';

    verify(received).then(resultado => {
        if (resultado.result === cname) {
            createProxy(request)
                .then(async (data) => {
                    let gracias = data.jsonSofia.gracias;
                    message.reply(gracias);
                })
                .catch((error) => {
                    console.error('Error al hacer la solicitud:', error);
                });
        }
    });
}

module.exports = gracias;