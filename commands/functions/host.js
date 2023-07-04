const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');
const cx = require("consola");

async function host(message) {

    let lowercase = message.body.toLowerCase();
    try {

        if (lowercase === 'host') {

            const media = MessageMedia.fromFilePath('./img/logoboxmine.jpg');

            sofi.sendMessage(message.from, media, {
                caption: `🪷*Boxmine World*🪷
            
Este es el host ideal para correr el bot, tiene precios muy accesibles, el mas barato esdolares por mes y tambien hay servers gratuitos, siempre y cuando esten vacios en el nodoo 6
            
🪷link de discord🪷 https://discord.gg/Rxydysgy

🪷*Mes Gratis*🪷
            
Si creas una cuenta nueva en https://boxmineworld.com/
recibiras 300 boxcoins
            
Si pones el codigo promocional:
*MySofiCX*
recibiras 300 boxcoins
            
Ahora tendras 600 lo que significa que puedes crear un servidor por un mes, totalmente gratis
            
*El codigo solo es utilizable 1 vez por persona, limite de 50 personas, multicuentas seran baneadas*` });
        }
    } catch (error) {
        cx.warn('Hay un error en host.js')
    }
}

module.exports = host;