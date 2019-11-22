var minecraftModule = require("../module/minecraft");
var lolModule = require("../module/lol");

exports.modules = (cmd, argumentos,bot) => {
    console.log("------- Seleccionando modulo -------")
    console.log("Modulo Recibido. -> " + cmd);
   
    
    let existModule = false;
    let selectedModule = "";
    modulos.forEach(modul => {

        if (modul.prefijo == cmd) {
            console.log("Nombre encontrado -> " + modul.nombre);
            selectedModule = modul.nombre;
            modul.funcion(argumentos,bot);
            existModule = true;
        }
    });

    if (!existModule) {
        console.log("el modulo no existe!")
    }
}

var modulos = [
    {
        nombre: "minecraft",
        prefijo: "m",
        funcion: (argumentos,bot) => {
            minecraftModule.modulo.select(argumentos,bot)
        }
    },

    {
        nombre: "lol",
        prefijo: "lol",
        funcion: (argumentos,bot) => {
            lolModule.modulo.select(argumentos,bot)
        }
    }
]
