const sofi = require("../../client");
//import { A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O } from "./statucon";

async function status(message) {

    const constantes = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O];

    // Función para establecer el estado cada 10 segundos
    async function establecerEstadoCada10Segundos() {
        for (const constante of constantes) {
            await sofi.setStatus(constante);
            console.log(`Estado actualizado a: ${constante}`);
            await sleep(10000); // Esperar 10 segundos
        }
    }

    // Función para pausar la ejecución durante un tiempo determinado
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Iniciar el proceso de establecimiento de estado cada 10 segundos
    establecerEstadoCada10Segundos();

}

module.exports = status;



