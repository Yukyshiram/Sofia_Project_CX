const cx = require("consola");

async function mensiones(message) {

    try {
        let lowercase = message.body.toLowerCase();

    if (lowercase === '!mention') {

        const chat = await message.getChat();
        const contact = await message.getContact();

        await chat.sendMessage(`Hello @${contact.id.user}`, {
            mentions: [contact]
        });
    }
    } catch (error) {
        cx.warn('Hay un error en mentions.js')
        cx.error(error)
    }
    
}

module.exports = mensiones;