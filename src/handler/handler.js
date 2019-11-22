var discord = require("../discord/discord");
var bot = discord.bot();
var modules = require("./modules");

exports.start = function () {
    console.log("Started.");
    console.log("\n");

    bot.on('ready', function (evt) {
        //console.log('Connected');
    });

    bot.on('message', function (user, userID, channelID, message, evt) {
        console.log("Mensaje Recibido. ->"+message)
        let botObject = {user:user,userId:userID,channelID:channelID,message:message,evt:evt,bot:bot}
        let comando;
        let argumentos;
        let auxMsg;
        if (message.substring(0, 1) == '!') {
            auxMsg = message.split(" ");
            comando = auxMsg[0].substring(1,auxMsg[0].length);
            argumentos = auxMsg.splice(1).join(" ");
            console.log("Comando Recibido. ->"+comando);
            console.log("Argumentos Recibidos. ->"+argumentos);
            modules.modules(comando,argumentos,botObject);

        }
       
        /*bot.sendMessage({
            to: channelID,
            message: "oli"
        });*/

    });

}