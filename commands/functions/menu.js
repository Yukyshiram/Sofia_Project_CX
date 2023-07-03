const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');
const cx = require("consola");

async function menu(message) {

    let lowercase = message.body.toLowerCase();

    const media = MessageMedia.fromFilePath('./img/morada.jpg');

    try {
        if (lowercase === '.menu' || lowercase === '.menú') {

            sofi.sendMessage(message.from, media, {
                caption: `*🪷Menu🪷*
                
Este es un menu super facil de usar
                
🪷---------------->>
| 🪷Info:🪷
|
| 🪷> info
| 🪷> chats
| 🪷> groupinfo
| 🪷> host (mes gratis)
| 🪷> dev
| 🪷> everyone
|--------
| 🪷Funciones🪷 
|
| 🪷> sticker (con imagen)
| 🪷> yt + enlace
| 🪷> mp3 + enlace
| 🪷> randomanime
| 🪷> neko
| 🪷> walld
| 🪷> wallp
| 🪷> wiki + busqueda
| 🪷> meme
| 🪷> everyone
|--------
| 🪷Math functions:🪷
|
| 🪷> random100
|-------- 
|
|🪷Chat gtp y Dall-e🪷
| _Estos no funcionaran sin su api_
| Ayuda para esto: *helpchat* 
| (esto es para usar chatgtp) 
|
| 🪷> sofi + texto 
| (esto es para usar a Dall-e)
| 🪷> eris + texto
🪷---------------->> 
                
Dall-e: generador de imagenes
*bigmenu* para ver uso de los comandos
                `
            })
        }
    } catch (error) {
        cx.warn('Hay un error en menu.js');
    }
}

module.exports = menu;