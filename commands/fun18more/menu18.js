const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');

async function menu18(message) {

    let lowercase = message.body.toLowerCase();

    const media = MessageMedia.fromFilePath('./img/moradaflor.jpg');

    try {
        if (lowercase === 'menu18') {
            sofi.sendMessage(message.from, media, { caption: 'Dios no entiendo porque le meti esto...\n\n🕵🏼‍♂️> ass \n🕵🏼‍♂️> bdsm \n🕵🏼‍♂️> cum \n🕵🏼‍♂️> doujin \n🕵🏼‍♂️> foxgirl \n🕵🏼‍♂️> glasses \n🕵🏼‍♂️> hentai \n🕵🏼‍♂️> masturbation \n🕵🏼‍♂️> maid \n🕵🏼‍♂️> pussy \n🕵🏼‍♂️> succubus \n🕵🏼‍♂️> tentacles' })
        }
    } catch (error) {
        console.log('Hay un error en menu18.js');
    }
}

module.exports = menu18;