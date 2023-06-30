const sofi = require("../../client");

async function status(message) {
    if (message.body === 'wischemi'){
        await sofi.setStatus('Prueba funcional');

    }
}

module.exports = status;



