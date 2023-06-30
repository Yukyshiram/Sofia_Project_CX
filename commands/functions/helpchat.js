async function helpchat(message) {
    let lowercase = message.body.toLowerCase();

    try {
        if (lowercase === 'helpchat') {
            message.reply('🪷Explicacion de Chat Gtp y Dalle by Openai🪷\n\n_Chat gtp_ le puedes preguntar practicamente cualquier cosa y te respondera, claro debes de ser coherente\nEjemplo: Sofi quiero saber como crear una cuenta en github. \n\nEn cambio _Dall-E_ es una IA que genera imagenes dependiendo las caracteristicas que le pongas\nEjemplo Eris mujer, ojos cafes, lentes\n\nAmbos son muy variados, pero recuerda que no siempre te daran lo que pides ya que son IAs\n\nAhora bien para sacar la api es muy sensillo, simplemente debes de crear una cuenta en\nhttps://openai.com/chatgpt\npara despues ir a la seccion\nhttps://platform.openai.com/account/api-keys\ny solo debes de dar click en "create new secret key", despues de eso vas a la ubicacion del bot (donde lo guardaste) y vas\na commands > functions > chatgtp.js - dallegtp.js \n  y en ambos archivos, donde esta:\n apiKey: ""\n pones tu api, la api funciona con ambos\n\nSi la api por mas nueva que sea, llego a su limite de usos, marcara un super error en consola, lo que significa que deberas crear una cuenta nueva y crear otra api\n\nSin mas por el momento, me despido Sofia_Project');
        }
    } catch (error) {
        console.log(' hay un error en helpchat.js');
    }
}

module.exports = helpchat;