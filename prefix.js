require('./globals')
const { prefix } = globalThis;

async function verify(received) {
    try {
        const hasPrefix = prefix.some(prefijo => received.startsWith(prefijo));

        if (hasPrefix) {
            const parts = received.split(" ");
            const prefijoEncontrado = prefix.find(prefijo => received.startsWith(prefijo));
            const result = parts[0].replace(prefijoEncontrado, "");
            const secondText = parts.slice(1).join(" ");
            if (secondText === ''){
                const secondText = null;
                return { result, secondText};
            } else {
                return { result, secondText};
            }
      
        } else {
            const result = null;
            const secondText = null;
            return { result, secondText};;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    verify
};
