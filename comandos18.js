const sofi = require('./client');
const { MessageMedia } = require('whatsapp-web.js');

async function comandos18(message) {

    const ass = require('./commands/fun18more/ass');
    const bdsm = require('./commands/fun18more/bdsm');
    const cum = require('./commands/fun18more/cum');
    const doujin = require('./commands/fun18more/doujin');
    const foxgirl = require('./commands/fun18more/foxgirl');
    const glasses = require('./commands/fun18more/glasses');
    const hentai = require('./commands/fun18more/hentai');
    const masturbation = require('./commands/fun18more/masturbation');
    const maid = require('./commands/fun18more/maid');
    const pussy = require('./commands/fun18more/pussy');
    const succubus = require('./commands/fun18more/succubus');
    const tentacles = require('./commands/fun18more/tentacles');

    try {
        sofi.on('message', async (message) => {

            const url = 'https://github.com/Yukyshiram/recursos_CDA/blob/main/moradaflor.jpg?raw=true';
            const media = await MessageMedia.fromUrl(url);

            let lowercase = message.body.toLowerCase();
            if (lowercase === 'menu18') {
                sofi.sendMessage(message.from, media, { caption: 'Dios no entiendo porque le meti esto...\n\n🕵🏼‍♂️> ass \n🕵🏼‍♂️> bdsm \n🕵🏼‍♂️> cum \n🕵🏼‍♂️> doujin \n🕵🏼‍♂️> foxgirl \n🕵🏼‍♂️> glasses \n🕵🏼‍♂️> hentai \n🕵🏼‍♂️> masturbation \n🕵🏼‍♂️> maid \n🕵🏼‍♂️> pussy \n🕵🏼‍♂️> succubus \n🕵🏼‍♂️> tentacles'})
            }

            await ass(message);
            await bdsm(message);
            await cum(message);
            await doujin(message);
            await foxgirl(message);
            await glasses(message);
            await hentai(message);
            await masturbation(message);
            await maid(message);
            await pussy(message);
            await succubus(message);
            await tentacles(message);

        })
    } catch (error) {
        console.log('hubo un error con algun comando de comandos18.js, esperemos no vuelva a pasar');
    }

}

module.exports = comandos18;