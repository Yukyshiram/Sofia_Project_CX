const sofi = require('./client');
const cx = require("consola");

async function comandos18(message) {

    const menu18 = require('./commands/fun18more/menu18');
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

            await menu18(message);
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
        cx.error('hubo un error con algun comando de comandos18.js, esperemos no vuelva a pasar');
    }

}

module.exports = comandos18;