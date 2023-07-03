const schedule = require('node-schedule');
const sofi = require("../../client");
const cx = require("consola");

const a1 = 'La verdad es que no hay una verdad';
const a2 = 'Busco respuestas y encuentro preguntas';
const a3 = 'Nadie contesta porque cuesta separarse de una mala junta';
const a4 = 'Lo barato sale caro, lo normal es lo raro';
const a5 = '"El ocio no me deja tiempo para nada"';
const a6 = 'Mi corazón vacío no soporta una ausencia más';
const a7 = 'Es lo malo de ser bueno en este mundo cruel';
const a8 = 'philos = amor || sophos= sabiduría  => “amor a la sabiduría".';

const messages = [a1, a2, a3, a4, a5, a6, a7, a8];

async function status(ready) {

    try {
        let index = 0;
        schedule.scheduleJob('*/10 * * * * *', () => {
            sofi.setStatus(`${messages[index]}`);
            //console.log(messages[index]); 
            index = (index + 1) % messages.length;
        });
    } catch (error) {
        cx.warn('hay un error en statusinicio.js')
    }
}

module.exports = status;
