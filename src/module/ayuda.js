/*
*               Este es el modulo de ayuda en este modulo
*               se busca retornar un mensaje de ayuda al
*               usuario que lo solicite e indicarle todos
*               los modulos disponibles y sus descripciones,
*               este modulo utilizara las descripciones, nombres, etc
*               para retornar la mejor ayuda al usuario referente al modulo,
*
*
* */


exports.modulo = {          //variable que hace referencia a todo el modulo para ser importado

    select: (argumentos, bot) => {          //funcion general que sera invocada, mantener nombre
        let comando;                //variable que almacenara el comando
        let subArguments;           //variable que almacenara los argumentos

        comando = argumentos.split(" ")[0];  //determinando que el comando es la primera palabra antes del primer espacio
        subArguments = argumentos.split(" ").splice(1).join(" ");//determinando que los argumentos son lo que sigue despues del primer espacio

        console.log("------ayuda MODULE------"); //Traza del modulo
        console.log("Comando-> " + comando); //traza del comando
        console.log("Argumentos-> " + subArguments == "" ? "Sin Argumentos." : subArguments); //traza de los argumentos en caso de que haya

        // ESTE MODULO NO POSEE SUB FUNCIONES, AL SER UN MODULO DE UNA FUNCION ACA ESTA SU FUNCIONALIDAD

        bot.bot.sendMessage({
            to: bot.channelID,
            message: "AYUDAA"
        });






    }
}

