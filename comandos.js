const sofi = require('./client');
const cx = require("consola");

async function comandos(message) {
    //json
    const jsonCommands = require('./commands/json/jsonCommands');

    //functions
    const menu = require('./commands/functions/menu');
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
    const chatgtp = require('./commands/functions/chatgtp');
    const dallegpt = require('./commands/functions/dallegpt');
    const helpchat = require('./commands/functions/helpchat');

    //math functions
    const randomNum100 = require('./commands/math/randomNum100');

    //testing
    const status = require('./commands/test/status')

    sofi.on('message', async (message) => {

        try {
            //json
            //await jsonCommands(message);

            //functions
            await menu(message);
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
            await chatgtp(message);
            await dallegpt(message);
            await helpchat(message);

            //math
            await randomNum100(message);

            //testing
            await status(message);

        } catch (error) {
            cx.error('hubo un error con algun comando de comandos.js, esperemos no vuelva a pasar');
            //console.log(error);
            //message.react('❌');
        }
    });
}

module.exports = comandos;