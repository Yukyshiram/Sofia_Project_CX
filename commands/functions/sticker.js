const mime = require('mime-types');
const fs = require('fs');
const chalk = require('chalk');
const { MessageMedia } = require('whatsapp-web.js')
const sofi = require('../../client');

const cyan = chalk.cyan;
const blue = chalk.italic.blue;

async function sticker(message){

    let lowercase = message.body.toLowerCase();

    if (message.hasMedia && lowercase === 'sticker'){
        message.react('✔️');
        message.downloadMedia().then(media => {

            if (media) {
                const mediaPath = './stickers/';
                if (!fs.existsSync(mediaPath)) {
                    fs.mkdirSync(mediaPath)
                }

                const extension = mime.extension(media.mimetype)
                const filename = new Date().getTime();
                const fullFileName = mediaPath + filename + '.' + extension;

                //guardar archivo 
                try {
                    fs.writeFileSync(fullFileName, media.data, { ecoding: 'base64' });

                    console.log(cyan('----------------------\n') + blue('| Archivo guardado en: ') + fullFileName);
                    MessageMedia.fromFilePath(filePath = fullFileName)

                    sofi.sendMessage(message.from, new MessageMedia(media.mimetype, media.data, filename), { sendMediaAsSticker: true, stickerAuthor: "Sr.Courtesy", stickerName: "Sofia_Project" })

                    fs.unlinkSync(fullFileName)

                    console.log(cyan('| luego eliminado y procesado correctamente\n ------------------------ \n'))
                } catch (err) {

                    console.log('fallo al guardar archivo', err);
                }
            }
        }).catch(err => {
            console.log('🪷')
            //sofi.sendMessage(message.from, 'Por poco colapsas el bot,stupid');
        });
    }
}

module.exports = sticker;