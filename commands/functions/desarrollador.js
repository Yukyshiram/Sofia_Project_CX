const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');

async function dev(message) {

    let lowercase = message.body.toLowerCase();
    try {

        const logo = 'https://jesscx.boxmineworld.com/img/CX.jpg'

        const media = await MessageMedia.fromUrl(logo);

        if (lowercase === 'dev') {
            sofi.sendMessage(message.from, media, { caption: `Yo soy\n🪷Im_JVallejo(Sr. Courtesy)🪷\n🇲🇽Mexicano\n🪄18 años\n_Desarrollador de CX Project_\n🪄Desarrollador web\nBot developer on:\n🪷Discord\n🪷Telegram\n🪷Whatsapp\n\n💫Mi github: https://github.com/Yukyshiram\n💫Mi discord: yukyshiram_cx\n💫Mi pagina: https://jesscx.boxmineworld.com/\nℹ️Si tienes dudas, puedes mandar mensaje a http://wa.me/+5213322200796` });
        }
    } catch (error) {
        console.log('Hay un error en desarrollador.js')
    }
}

module.exports = dev;