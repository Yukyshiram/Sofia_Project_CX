const sofi = require('./client');

async function comandos(message) {
    
    const jsonCommands = require('./commands/json/jsonCommands');
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
    const status = require('./commands/test/status')

    sofi.on('message', async (message) => {

        try {
            await jsonCommands(message);
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
            await menu(message);
            await status(message);

        } catch (error) {
            console.log('hubo un error con algun comando de comandos.js, esperemos no vuelva a pasar');
            //console.log(error);
            //message.react('❌');
        }
    });
}

module.exports = comandos;