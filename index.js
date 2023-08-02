const qrcode = require('qrcode-terminal');
const chalk = require('chalk');
const cx = require("consola");
const moment = require('moment-timezone');

const comandos = require('./comandos');
const comandos18 = require('./comandos18');
const consol = require('./log/log');
const status = require('./commands/presencia/statusinicio');

//estilos de texto en consola
const red = chalk.bold.red;

//fecha y hora MX
const mexico = moment().tz("America/Mexico_City");
const hour = mexico.format('HH:mm:ss');

//cliente
const sofi = require('./client');

// Guarda valores de sesión en el archivo después de una autenticación exitosa
sofi.on('authenticated', (session) => {
    //console.clear()
    cx.success(red(`Autenticado at ${hour}\n`))
});

//si no esta iniciado, crea un qr
sofi.on("qr", qr => {
    console.log('Código QR:', qr)
    qrcode.generate(qr, { small: true });
});

//si esta activo, enviar mensaje a los siguientes numeros
const send_message = [
    "5213321485996"
]

//Ejecutar cliente
sofi.on("ready", async () => {

    status();

    consol();

    await send_message.map(value => {
        const chatId = value + "@c.us"
        message = `La flor de la eternidad esta en linea \nTime: ${hour}\n_Sr. Courtesy_`
        sofi.sendMessage(chatId, message);
    })

    //await status(message);
})

//cargando
sofi.on('loading_screen', (percent, message) => {
    if (percent === 100) {
        console.log('Carga completa,', 'Iniciando', message);
    } else {
        console.log('Cargando en un', percent, '%', message);
    }
});

//conexion:
sofi.on('change_state', state => {
    cx.info(red('Estatus de la conexion', state));
});

sofi.on('group_join', (notification) => {
    //const number = notification.recipientIds.replace("@c.us", "")
    const user = notification.recipientIds.splice(0, 5)
    //console.log(user)
    console.log(`\nEl usuario *${user}* a entrado\n`)

    notification.reply(`El usuario @${user} a entrado`)
});

sofi.on('group_leave', (notification) => {
    //const number = notification.recipientIds.replace("@c.us", "")
    const user = notification.recipientIds.splice(0, 5)
    //console.log(user)
    console.log(`\nEl usuario *${user}* a salido\n`)

    notification.reply(`El usuario @${user} a salido`)
});

sofi.on('group_update', async (notification) => {
    const type = notification.type.toLowerCase();
    const author = notification.author.replace('@c.us', '');

    if (type === 'subject') {
        
        console.log(`\n[whatsapp-web.js] Group Update: ${author} Changed Group Title To ${notification.body}\n`);
        
        // Verificamos si se encontró el autor de la notificación
        if (author) {
            const replyText = `Nuevo titulo *${notification.body}* by @${author}`;
            await notification.reply(replyText);

        } else {
            console.log('No se encontró el autor de la notificación.');
        }
    } else if (type === 'picture') {
        
        console.log(`\n[whatsapp-web.js] Group Update: ${author} Changed Group Photo Profile.\n`);
        
        // Verificamos si se encontró el autor de la notificación
        if (author) {
            const replyText = `Actualizacion de grupo: @${author} cambio la foto de perfil.`;
            await notification.reply(replyText);
        } else {
            console.log('No se encontró el autor de la notificación.');
        }
    } else {
        const text = notification.body;
        //console.log(notification);
        notification.reply(`Nueva descripcion:\n*${text}*`);
    }
});

sofi.on('disconnected', (reason) => {
    cx.warn('El cliente fue desconectado', reason);
});

//iniciar cliente
sofi.initialize();

comandos();
comandos18();