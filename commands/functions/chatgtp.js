const { Configuration, OpenAIApi } = require("openai");
const { consola } = require("consola");

async function chatgtp(message) {
    let lowercase = message.body.toLowerCase()
    if (lowercase.startsWith('sofi')) {

        const words = message.body.split(' ');
        if (words.length >= 2) {
            try {
                const peticion = words.slice(1).join(' ');
                consola.start(`Usuario a gtp: ${peticion}`);

                const configuration = new Configuration({
                    apiKey: "",//aqui debo de ser muy claro,si la api esta al limite aunque sea nueva soltara un error muy largo en consola, yo recomiendo crear una nueva cuenta y luego poner la api
                });

                const openai = new OpenAIApi(configuration);

                async function runCompletion() {
                    const completion = await openai.createCompletion({
                        model: "text-davinci-003",
                        prompt: `${peticion}`,
                        max_tokens: 500
                    });

                    await completion.data.choices.forEach(choice => {
                        //console.log(choice.text);
                        message.reply(`🪷*Resultado*🪷`+choice.text);
                        message.react('🪷');
                        console.log('Enviado correctamente :3');
                    });
                }

                runCompletion();
            } catch (error) {
                console.log('hubo un error en chatgtp.js');
            } 
        } else {
            console.log('Requiere un texto despues de Sofi, ejemplo sofi como puedo crear una cuenta google?');
            message.reply('🪷Requiere un texto despues de Sofi, ejemplo sofi como puedo crear una cuenta google?')
        }
    }
}

module.exports = chatgtp;