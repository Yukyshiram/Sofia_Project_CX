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

    //logs
    const logmsg = require('./commands/functions/logmsg');

    //math functions
    const randomNum100 = require('./commands/math/randomNum100');

    //testing
    const status = require('./commands/test/status');

    sofi.on('message_create', async (message) => {

        try {
            //json
            jsonCommands(message);

            //functions
            menu(message);
            sofia(message);
            sticker(message);
            infoGroup(message);
            YT(message);
            mp3(message);
            meme(message);
            glg(message);
            wikia(message);
            neko(message);
            wallp(message);
            walld(message);
            animerandom(message);
            chats(message);
            info(message);
            host(message);
            dev(message);
            everyone(message);
            chatgtp(message);
            dallegpt(message);
            helpchat(message);

            //logs
            logmsg(message);

            //math
            randomNum100(message);

            //testing
            status(message);

        } catch (error) {
            cx.error('hubo un error con algun comando de comandos.js, esperemos no vuelva a pasar');
            //console.log(error);
            //message.react('❌');
        }
    });
}

module.exports = comandos;