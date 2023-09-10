const cx = require("consola");
const chalk = require('chalk');
const cyan = chalk.cyan;
const green = chalk.green;
const blue = chalk.italic.blue;
const yellow = chalk.yellow;

async function logmsg(message) {
//Esto es de Judith's Gate, otro de mis proyectos personales

    const mensajeporcaracteres = message.body.length;
    const chat = await message.getChat();

    try {
        if (message.hasMedia && message.from === 'status@broadcast' && message.body === '') {
            //Estado sin texto
            cx.info(cyan(`Estado sin texto de ${message._data.notifyName}\n`))

        } else if (message.hasMedia && message.from === 'status@broadcast') {
            //Estado con texto y algun video o imagen
            cx.info(cyan(`Estado de: ${message._data.notifyName}\n`) +
                green(`Mensaje: ${message.body} \n`))

        } else if (message.from === 'status@broadcast') {
            //Estado de solo texto
            cx.info(cyan(`Estado de: ${message._data.notifyName}\n`) +
                green(`mensaje: ${message.body}\n`))

        } else if (chat.isGroup && message.hasMedia && message.type === 'image' && mensajeporcaracteres < 1999) { //Imagen con texto del grupo
            cx.info(`Imagen de grupo\n` +
                cyan(`Grupo: ${chat.name}\n`) +
                green(`Numero: ${message.author}\n`) +
                blue(`Usuario: ${message._data.notifyName}\n`) +
                yellow(`Mensaje: ${message.body}\n`))

        } else if (chat.isGroup && mensajeporcaracteres < 1999) {
            //la tolerancia de los mensajes del bot es de 2000 caracteres, asi que esto limita que un grupo cause error al bot en mensaje de grupo
            cx.info(cyan(`Grupo: ${chat.name}\n`) +
                green(`Numero: ${message.author}\n`) +
                blue(`Usuario: ${message._data.notifyName}\n`) +
                yellow(`Mensaje: ${message.body}\n`))

        } else if (mensajeporcaracteres < 1999) {
            //usuario privado
            cx.info(green(`Usuario: ${message._data.notifyName}\n`) +
                blue(`Mensaje: ${message.body}\n`))

        } else {
            //mensajes que no estan registrados
            cx.warn('Estos son mensajes no declarados o invalidos\n')
        }
    } catch (error) {
        cx.error('Hay un error en logmsg.js');
    }
}

module.exports = logmsg;