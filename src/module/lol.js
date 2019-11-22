const axios = require('axios');




exports.modulo = {


    select: (argumentos, bot) => {
        let comando;
        let subArguments;

        comando = argumentos.split(" ")[0];
        subArguments = argumentos.split(" ").splice(1).join(" ");

        console.log("------lola MODULE------");
        console.log("Comando recibido-> " + argumentos);
        console.log("Comando-> " + comando);
        console.log("Argumentos-> " + subArguments == "" ? "Sin Argumentos." : subArguments);


        funciones.forEach(cmd => {
            if (cmd.comando == comando) {
                cmd.funcion(subArguments, bot)
            }
        })
    }
}

var funciones = [
    {
        nombre: "esta funcion dice el resumen de un jugador lol",
        comando: "resumen",
        funcion: (argumentos, bot) => {

            let res = "";
            console.log('https://www.leagueofgraphs.com/summoner/las/' + argumentos)
            axios.get('https://www.leagueofgraphs.com/summoner/las/' + argumentos)
                .then(function (response) {
                    res = response.data;

                    console.log(res.substring(res.indexOf('<meta name="description" content="'), res.indexOf('<meta http-equiv="X-U')))
                    res = res.substring(res.indexOf('<meta name="description" content="'), res.indexOf('<meta http-equiv="X-U'));
                })
                .catch(function (error) {
                    res = error;

                })
                .finally(function () {
                    bot.bot.sendMessage({
                        to: bot.channelID,
                        message: res
                    });
                });



        }
    }
]