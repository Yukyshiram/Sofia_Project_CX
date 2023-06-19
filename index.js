const qrcode = require('qrcode-terminal');
const chalk = require('chalk');
const moment = require('moment-timezone');
const comandos = require('./comandos');
const comandos18 = require('./comandos18');
const consola = require('./log/log');
const status = require('./commands/test/status');

//estilos de texto en consola
const red = chalk.bold.red;

//fecha y hora MX
const mexico = moment().tz("America/Mexico_City");
const hour = mexico.format('HH:mm:ss');

//cliente
const sofi = require('./client');

// Guarda valores de sesión en el archivo después de una autenticación exitosa
sofi.on('authenticated', (session) => {
    console.clear()
    console.log(red(`El bot se a iniciado exitosamente! ${hour}\n`))
});

//iniciar cliente
sofi.initialize();

//si no esta iniciado, crea un qr
sofi.on("qr", qr => {
    qrcode.generate(qr, { small: true });
});

//si esta activo, enviar mensaje a los siguientes numeros
const send_message = [
    "5213321485996"
]

//Ejecutar cliente
sofi.on("ready", async() => {

    consola();

    await send_message.map(value => {
        const chatId = value + "@c.us"
        message = `El bot esta online \nTime: ${hour}`
        sofi.sendMessage(chatId, message);
    })

    //await status(message);
})

comandos();
comandos18();