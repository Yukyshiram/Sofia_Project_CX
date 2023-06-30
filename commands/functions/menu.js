const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');

async function menu(message) {

    let lowercase = message.body.toLowerCase();

    const media = MessageMedia.fromFilePath('./img/morada.jpg');

    try {
        if (lowercase === '.menu') {

            sofi.sendMessage(message.from, media, {
                caption: `*🪷Menu🪷* \n\nEste es un menu super facil de usar\n\n🪷---------\n| 🪷Info:🪷\n| 🪷> info\n| 🪷> chats\n| 🪷> groupinfo\n| 🪷> host (mes gratis)\n| 🪷> dev\n| 🪷> everyone\n|\n| 🪷Funciones🪷 \n|--------\n| 🪷> sticker (con imagen)\n| 🪷> yt + enlace\n| 🪷> mp3 + enlace\n| 🪷> randomanime\n| 🪷> neko\n| 🪷> walld\n| 🪷> wallp\n| 🪷> wiki + busqueda\n| 🪷> meme\n| 🪷> everyone\n|\n| 🪷Chat gtp y Dall-e🪷\n| _Estos no funcionaran sin su api_\n| Ayuda para esto: *helpchat* \n| (esto es para usar chatgtp) \n| 🪷> sofi + texto \n| (esto es para usar a Dall-e)\n| 🪷> eris + texto\n🪷--------- \nDall-e: generador de imagenes\n*bigmenu* para ver uso de los comandos`
            })
        }
    } catch (error) {
        console.log('Hay un error en menu.js');
    }
}

module.exports = menu;