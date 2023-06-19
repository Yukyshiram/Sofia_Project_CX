const fs = require('fs');

async function jsonCommands(message) {

    //y de esta manera me desago de todo lo que tenia
    let datosJSON = fs.readFileSync('./commands/json/commands.json', 'utf-8');
    let datos = JSON.parse(datosJSON);
    let encontrado;
    let busqueda;
    let reaccion;

    //en teoria si le meto regedix() ya podria identificar el comando dentro de la oracion
    let lowercase = message.body.toLowerCase();

    const comando = lowercase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    //console.log(comando);

    datos.forEach(function (objeto) {
        if (objeto.name === comando) {
            busqueda = objeto.name;
            encontrado = objeto.text;
            reaccion = objeto.reaction;
        }
    });
    //console.log(busqueda)
    //console.log(encontrado)

    if (busqueda === undefined) {
        //console.log('este es un mensaje indefinido')
    } else {
        //chat.sendStateTyping();
        message.reply(`${encontrado}`)
        message.react(`${reaccion}`)
        encontrado = undefined;
        busqueda = undefined;
        reaccion = undefined;
    }
}

module.exports = jsonCommands;