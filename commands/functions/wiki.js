const wikipedia = require('wikipedia');
const sofi = require('../../client');
const { MessageMedia } = require('whatsapp-web.js');
const cx = require("consola");

async function wikia(message) {

    let lowercase = message.body.toLowerCase();
    if (lowercase.startsWith('wiki')) {

        const words = message.body.split(' ');

        if (words.length >= 2) {

            const busqueda = words.slice(1).join(' ');

            cx.start(`Buscar en wikipedia: ${busqueda} \n`);

            async function busca() {
                try {
                    wikipedia.setLang('es'); // Establecer el idioma en español

                    const page = await wikipedia.page(`${busqueda}`);

                    const summary = await page.summary();

                    //para ver que muestra de informacion:
                    //console.log(summary.title);
                    let title = summary.title;

                    //console.log(summary.thumbnail.source);
                    let imagen = summary.thumbnail.source;

                    //console.log(summary.extract)
                    let text = summary.extract

                    try {
                        if (imagen === undefined) {
                            await message.reply(`🪷> Aqui estan los resultados de: ${busqueda}\n\n🪷Titulo🪷:\n${title}\n\n🪷Descripcion🪷\n${text}`)
            
                        } else {
                            const media = await MessageMedia.fromUrl(imagen);
            
                            sofi.sendMessage(message.from, media, { caption: `🪷> Aqui estan los resultados de: ${busqueda}\n\n🪷Titulo🪷:\n${title}\n\n🪷Descripcion🪷\n${text}` });
                        }
                    } catch (error) {
                        cx.warn('algo fallo en wiki.js')
                    }
                    
                } catch (error) {
                    cx.warn('Esto no existe');
                    message.react('❌');
                }
            };
            busca();

        } else {
            message.reply('El comando wiki requiere al menos un link despues de la palabra de *wiki*');
        }
    }
};

module.exports = wikia;