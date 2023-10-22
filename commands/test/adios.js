const { verify } = require('../../prefix');
const { createProxy } = require('./../../proxy');

async function hola(message) {
    let received = message.body.toLowerCase();
    const request = 'hola';

    verify(received).then(resultado => {
        if (resultado.result === request) {
            createProxy(request)
                .then(async (data) => {
                    let hola = data.Hola;
                    message.reply(hola);
                    message.react('👋🏼');
                })
                .catch((error) => {
                    console.error('Error al hacer la solicitud:', error);
                });
        }
    });
}

module.exports = hola;