const sofi = require("../../client");

async function chats(message) {

    let lowercase = message.body.toLowerCase();
    try {
        if (lowercase === 'chats') {
            const chats = await sofi.getChats();
            sofi.sendMessage(message.from, `El bot tiene ${chats.length} chats abiertos.`);
        }
    } catch (error) {
        console.log('Hay un error en chat.js');
    }
}

module.exports = chats;