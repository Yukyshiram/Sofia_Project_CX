const http = require('http');
const cx = require('consola');
const chalk = require('chalk');

const red = chalk.bold.red;

async function ping() {

    const options = {
        host: 'n7.boxmineworld.com',
        port: 3002,
        path: '/sofia',
        method: 'GET',
      };

    const req = http.request(options, (res) => {
        //console.log(`Status: ${res.statusCode}`);

        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            cx.success(red('\nSr. Courtesy:', data, '\n'));
        });
    });

    /*
    req.on('error', (error) => {
        console.error('Error:', error.message);
    });
    */

    req.end();
}

module.exports = ping;