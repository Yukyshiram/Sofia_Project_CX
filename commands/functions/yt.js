const ytdl = require('ytdl-core');
const fs = require('fs');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');

async function YT(message) {

    const chat = await message.getChat();
    let lowercase = message.body.toLowerCase();

    if (lowercase.startsWith('yt')) {

        const mediaPath = './videos/';
                if (!fs.existsSync(mediaPath)) {
                    fs.mkdirSync(mediaPath)
                }
        
        const words = message.body.split(' ');
        
        if (words.length >= 2) {

            message.reply('🪷*Beta*🪷\n_Asegurese que el video no dure mas de 4 minutos_\n\n procesando...');

            const videoURL = words.slice(1).join(' ');

            console.log(`Analizando url: ${videoURL} \n`);

            ytdl.getInfo(videoURL).then(info => {
                // Obtiene el título del video
                const resultado = info.videoDetails.title;

                //descripcion del video
                const descripcion = info.videoDetails.description;

                //categoria del video
                const categoria = info.videoDetails.category;

                const title = resultado.split(" ")[0].toLowerCase();

                sofi.sendMessage(message.from, `🪷*Titulo*🪷\n${resultado}\n\n🪷*Descripcion*🪷\n${descripcion}\n\n🪷*Categoria*🪷\n${categoria}`);

                // Crea el archivo de salida con el título del video como nombre
                const outputFilePath = `videos/${title}.mp4`;
                const outputStream = fs.createWriteStream(outputFilePath);

                // Descarga el video y guarda en el archivo
                const videoStream = ytdl(videoURL, { quality: 'highest', filter: 'audioandvideo', format: 'mp4' });
                videoStream.pipe(outputStream);

                outputStream.on('finish', async () => {
                    console.log(`El archivo ${outputFilePath} se ha guardado correctamente, procediendo a enviar.\n`);

                    const file = outputFilePath;
                    const videoBuffer = fs.readFileSync(file, { encoding: 'base64' });
                    const media = new MessageMedia('video/mp4', videoBuffer, `${title}.mp4`);

                    await chat.sendMessage(media, { sendMediaAsDocument: true });

                    await fs.unlinkSync(outputFilePath);
                });
            });
        } else {
            message.reply('El comando yt requiere al menos un link despues de la palabra de *yt*');
        }

    }
}

module.exports = YT;
