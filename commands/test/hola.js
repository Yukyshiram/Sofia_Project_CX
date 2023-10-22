const { verify } = require('../../prefix');
const { createProxy } = require('./../../proxy');

async function hola(message) {
    let received = message.body.toLowerCase();
    const request = 'adios';

    verify(received).then(resultado => {
        if (resultado.result === request) {
            createProxy(request)
                .then(async (data) => {
                    let adios = data.Adios;
                    message.reply(adios);
                    message.react('👋🏼');

                })
                .catch((error) => {
                    console.error('Error al hacer la solicitud:', error);
                });
        }
    });
}

module.exports = hola;