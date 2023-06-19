const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');

async function host(message) {

    let lowercase = message.body.toLowerCase();
    try {

        const logo = 'https://github.com/Yukyshiram/recursos_CDA/blob/main/logoboxmine.jpg?raw=true'

        const media = await MessageMedia.fromUrl(logo);

        if (lowercase === 'host') {
            
            sofi.sendMessage(message.from, media, { caption: `🪷*Boxmine World*🪷\n\nEste es el host ideal para correr el bot, tiene precios muy accesibles, el mas barato es 3 meses por mes y tambien hay servers gratuitos, siempre y cuando esten vacios en el nodo 4 o 6\n\n🪷link de discord🪷 https://discord.gg/Rxydysgy\n\n*Para tener un mes gratis con el bot necesitas 600 boxcoins*\n\nSi creas una cuenta nueva en https://boxmineworld.com/\nrecibiras 500 boxcoins\n\nSi pones el codigo promocional:\n*MySofiCX*\nrecibiras 99 boxcoins\n\nAhora tendras 599 para recibir la *ultima coin* tendras que acceder a https://afk.boxmineworld.com/ \ny solo tendras que aguardar un rato`});
        }
    } catch (error) {
        console.log('Hay un error en host.js')
    }
}

module.exports = host;