/* ******************************************************
*
*       esta clase esta encargada de mantener el mensaje y
*       separarlo segun venga
*
*                   Ejemplo de comando
*
*                   !m status
*
*                   ! = caracter llave indica que este es un comando
*                   m = modulo seleccionado en este caso minecraft
*                   status = comando del modulo seleccionado, este es opcional ya que existen modulos que no necesitan un "sub comando"*
*
*
* */


var discord = require("../discord/discord");
var bot = discord.bot();
var modules = require("./modules");

exports.start = function () {
    console.log("Started.");     //INICIO DEL BOT
    console.log("\n");



    //EVENTO DE CUANDO EL BOT YA ENTRO AL CANAL
    bot.on('ready', function (evt) {
    });

    //EVENTO DE CUANDO HAY UN MENSAJE EN EL CANAL (cualquiera)
    bot.on('message', function ( message) {




        console.log("Mensaje Recibido. ->"+message)
        //let botObject = {user,userID,channelID,message,evt,bot}; //objeto bot para su uso en modulos
        let botObject = {message}; //objeto bot para su uso en modulos
        let comando; //variable que contendra el comando
        let argumentos; //variable que contendra los argumentos
        let auxMsg; //variable utilizada para realizar la separacion del mensaje completo (auxiliar)
        if (message.substring(0, 1) == '!') { //determinando si el mensaje enviado tiene presente un "!" al inicio
            auxMsg = message.split(" ");  //al ser asi separar todo el mensaje por espacios
            comando = auxMsg[0].substring(1,auxMsg[0].length); //el comando es igual a la palabra despues "!" y antes del primer espacio
            argumentos = auxMsg.splice(1).join(" ");// argumentos son lo que sigue despues del primer espacio
            console.log("Comando Recibido. ->"+comando); //imprimiendo el comando
            console.log("Argumentos Recibidos. ->"+argumentos); //imprimiendo los argumentos
            modules.modules(comando,argumentos,botObject); //enviar los argumentos el comando y el bot hacia los modulos par realizar la accion solicitada

        }
    });

}
