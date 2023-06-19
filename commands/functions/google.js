const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const puppeteer = require('puppeteer');
const fs = require('fs');

async function glg(message) {

    //const chat = await message.getChat()
    let lowercase = message.body.toLowerCase();
    //const ubicacionimg = 'images/example.png';
    const ubicacioncom = 'commands/functions/images/example.png';

    if (lowercase.startsWith('glg')) {

        const mediaPath = './commands/functions/images/';
        if (!fs.existsSync(mediaPath)) {
            fs.mkdirSync(mediaPath)
        }

        const words = message.body.split(' ');

        if (words.length >= 2) {

            message.reply('🪷*Sofia*🪷\n_Un momento por favor_\n\n   procesando...');

            const busqueda = words.slice(1).join(' ');

            console.log(`Buscando: ${busqueda} \n`);

            async function searchOnGoogle() {
                const browser = await puppeteer.launch({
                    args: ['--no-sandbox'],
                    headless: 'new',
                    slowMo: 250,
                });

                const page = await browser.newPage();

                await page.setViewport({ width: 1180, height: 1920 });

                await page.goto('https://www.google.com/?hl=es')
               
                const x = 673;
                const y = 1259;
                await page.mouse.click(x, y);
                
                await page.type('textarea', `${busqueda}`);

                const p = 484;
                const q = 470;
                await page.mouse.click(p, q);
                //await page.click('input')

                await page.screenshot({ path: ubicacioncom });

                await console.log('Listo, enviando 🪷');

                await browser.close();
            }

            await searchOnGoogle();

            let media = MessageMedia.fromFilePath(`${ubicacioncom}`);

            sofi.sendMessage(message.from, media, { caption: `🪷> Aqui estan los resultados de: ${busqueda}` });

            await fs.unlinkSync(ubicacioncom)

        } else {

            message.reply('Este comando requiere al menos algo despues de *glg*');
        }
    }
};

module.exports = glg;