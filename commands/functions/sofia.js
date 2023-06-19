async function sofia(message){
    let lowercase = message.body.toLowerCase()
    if(lowercase === 'sofia'){
        message.reply('Aqui estoy, ¿que necesitas?');
        message.react('🪷');
    }
}

module.exports = sofia;