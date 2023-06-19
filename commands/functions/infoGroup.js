async function infoGroup(message) {

    let lowercase = message.body.toLowerCase();

    if (lowercase === 'groupinfo') {
        let chat = await message.getChat();

        if (chat.isGroup) {
            message.reply(`*Detalles del grupo*
Nombre del grupo: ${chat.name}
Descripcion: ${chat.description}
Creado el: ${chat.createdAt.toString()}
Creado por: ${chat.owner.user}
Numero de participantes: ${chat.participants.length}`);

        } else {

            message.reply('*¡Este comando solo se puede usar en un grupo!*');

        }
    }
}

module.exports = infoGroup;