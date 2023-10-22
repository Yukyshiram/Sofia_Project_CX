const axios = require('axios');
const apikey = 'CX';

async function createProxy(request){
    try {
        const url = `https://api_skl.boxmine.xyz/${request}?apikey=${apikey}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function createProxyText(request, peticion){
    try {
        const url = `https://api_skl.boxmine.xyz/${request}?text=${peticion}&apikey=${apikey}`;
        const response = await axios.get(url);
        //console.log(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createProxy,
    createProxyText
}
