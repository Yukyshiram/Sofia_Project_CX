const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');

async function host(message) {

    let lowercase = message.body.toLowerCase();
    try {

        if (lowercase === 'host') {

            const media = MessageMedia.fromFilePath('./img/logoboxmine.jpg');

            sofi.sendMessage(message.from, media, { caption: `🪷*Boxmine World*🪷\n\nEste es el host ideal para correr el bot, tiene precios muy accesibles, el mas barato es 3 dolares por mes y tambien hay servers gratuitos, siempre y cuando esten vacios en el nodo 4 o 6\n\n🪷link de discord🪷 https://discord.gg/Rxydysgy\n\nSi creas una cuenta nueva en https://boxmineworld.com/\nrecibiras 300 boxcoins\n\nSi pones el codigo promocional:\n*MySofiCX*\nrecibiras 100 boxcoins\n\nAhora tendras 400 para obtemer mas necesitas 200 que puedes conseguir en\n https://afk.boxmineworld.com/ \ny solo tendras que aguardar un rato \nSi no te gusta esperar puedes usar 3 dolares para comprar 600 boxcoins y crear un servidor en nodo 3` });
        }
    } catch (error) {
        console.log('Hay un error en host.js')
    }
}

module.exports = host;