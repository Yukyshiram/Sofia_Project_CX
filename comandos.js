const sofi = require('./client');
const { MessageMedia } = require('whatsapp-web.js');

async function comandos(message) {
    const jsonCommands = require('./commands/json/jsonCommands');
    const sofia = require('./commands/functions/sofia');
    const sticker = require('./commands/functions/sticker');
    const infoGroup = require('./commands/functions/infoGroup');
    const YT = require('./commands/functions/yt');
    const mp3 = require('./commands/functions/mp3');
    const meme = require('./commands/functions/meme');
    const glg = require('./commands/functions/google');
    const wikia = require('./commands/functions/wiki');
    const neko = require('./commands/functions/neko');
    const wallp = require('./commands/functions/wallphone');
    const walld = require('./commands/functions/walldesktop');
    const animerandom = require('./commands/functions/animerandom');
    const chats = require('./commands/functions/info');
    const info = require('./commands/functions/chat');
    const host = require('./commands/functions/host');
    const dev = require('./commands/functions/desarrollador');
    const everyone = require('./commands/functions/everyone');

    sofi.on('message', async (message) => {


        const url = 'https://github.com/Yukyshiram/recursos_CDA/blob/main/morada.jpg?raw=true';
        const media = await MessageMedia.fromUrl(url);

        let lowercase = message.body.toLowerCase();
        if (lowercase === 'menu') {
            sofi.sendMessage(message.from, media, { caption: `*🪷Menu🪷* \n\nEste es un menu super facil de usar\n\n🪷---------\n| 🪷Info:🪷\n| 🪷> info\n| 🪷> chats\n| 🪷> groupinfo\n| 🪷> host (mes gratis)\n| 🪷> dev\n| 🪷> everyone\n|\n| 🪷Funciones🪷 \n|--------\n| 🪷> sticker (con imagen)\n| 🪷> yt + enlace\n| 🪷> mp3 + enlace\n| 🪷> randomanime\n| 🪷> glg + busqueda\n| 🪷> neko\n| 🪷> walld\n| 🪷> wallp\n| 🪷> wiki + busqueda\n| 🪷> meme\n🪷---------\n\n*bigmenu* para ver uso de los comandos` })
        }

        try {
            //await jsonCommands(message);
            await sofia(message);
            await sticker(message);
            await infoGroup(message);
            await YT(message);
            await mp3(message);
            await meme(message);
            await glg(message);
            await wikia(message);
            await neko(message);
            await wallp(message);
            await walld(message);
            await animerandom(message);
            await chats(message);
            await info(message);
            await host(message);
            await dev(message);
            await everyone(message);
        } catch (error) {
            console.log('hubo un error con algun comando de comandos.js, esperemos no vuelva a pasar');
        }


    });
}

module.exports = comandos;