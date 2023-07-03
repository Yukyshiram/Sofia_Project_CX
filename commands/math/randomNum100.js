const cx = require('consola');

async function randomNum100(message) {
    let lowercase = message.body.toLowerCase();

    try {
        if (lowercase === 'random100') {
            const min = 1;
            const max = 100;
            const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
            message.reply('🪷> ' + randomNum);
        }
    } catch (error) {
        cx.warn('Hay un error en randomNum100.js')  
    }
    
}

module.exports = randomNum100;