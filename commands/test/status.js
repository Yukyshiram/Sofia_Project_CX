const sofi = require("../../client");

async function status(message) {
    if (message.body === 'wischemi'){
        await sofi.setStatus('Esto es un tributo a Vicemi');
    }
}

module.exports = status;



