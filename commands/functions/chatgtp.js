const cx = require("consola");
const axios = require('axios');

async function chatgtp(message) {
    let lowercase = message.body.toLowerCase();
    if (lowercase.startsWith('sofi')) {

        const words = message.body.split(' ');
        if (words.length >= 2) {
            try {
                const peticion = words.slice(1).join(' ');
                cx.start(`Usuario a gtp: ${peticion}`);

                const declaracion = `https://api_skl.boxmine.xyz/openai?text=${peticion}&apikey=SKL`;
                const response = await axios.get(declaracion);

                const data = response.data;
                const busqueda = data.Openai.TextFromUser;
                const resultado = data.Openai.TextFromOpenai;

                await message.reply(`🪷 *Resultado* 🪷 \n` + busqueda + resultado);
                message.react('🪷');
                cx.success('Enviado correctamente :3');

            } catch (error) {
                cx.error('hubo un error en chatgtp.js');
            }
        } else {
            cx.info('Requiere un texto despues de Sofi, ejemplo sofi como puedo crear una cuenta google?');
            message.reply('🪷Requiere un texto despues de Sofi, ejemplo sofi como puedo crear una cuenta google?')
        }
    }
}

module.exports = chatgtp;