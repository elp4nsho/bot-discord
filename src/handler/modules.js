/*
*           Esta clase hace referencia a todos los modulos,
*           aqui se determinan los prefijos y donde estan sus
*           modulos para añadir funcionalidades,
*
*           se debe importar el modulo
*
*           var minecraftModule = require("../module/minecraft");

*           y luego añadirlo en la variable modulos de tipo lista para determinar
*           el prefijo y la descripcion etc.
*
*                   objeto usado para la importacion de modulo
*           {
                nombre: "minecraft",        nombre del modulo
                prefijo: "m",               palabra clave para llamar al modulo
                funcion: (argumentos, bot) => {
                        minecraftModule.modulo.select(argumentos, bot)  funcion en caso de invocacion
                    }
            }
*
*
* */

var minecraftModule = require("../module/minecraft");
var lolModule = require("../module/lol");
var ayudaModule = require("../module/ayuda");

exports.modules = (cmd, argumentos, bot) => {
    console.log("------- Seleccionando modulo -------")  //Traza de la clase modulo
    console.log("Modulo Recibido. -> " + cmd);  //traza de comando recibido


    let existModule = false;     //variable que almacena si existe o no el modulo
    let selectedModule = "";    //variable que almacena el modulo seleccionado
    modulos.forEach(modul => {

        if (modul.prefijo == cmd) {
            console.log("Nombre encontrado -> " + modul.nombre); //traza del nombre del modulo que encontro por el comando
            selectedModule = modul.nombre; //almacenando el modulo en la variable
            modul.funcion(argumentos, bot); // invocando la funcion del modulo seleccionado
            existModule = true; //determinando que el modulo si existe
        }
    });

    if (!existModule) {     //en caso de que el modulo no exista
        console.log("el modulo no existe!")     //traza de mensaje que indica que el modulo no existe
    }
}

const modulos = [         //variable que almacena los modulos
    {
        nombre: "Ayuda v1.0",  //Nombre del modulo, este hace referencia al modulo
        prefijo: "ayuda",       //palabra clave del modulo, es la palbra que se utilizara despues del !
        funcion: (argumentos, bot) => {     //Funcion que se usara en el caso de que seleccionen este modulo
            ayudaModule.modulo.select(argumentos, bot)  //esta funcion deberia ser la misma en todos los modulos
        }
    },
    {
        nombre: "minecraft",
        prefijo: "m",
        funcion: (argumentos, bot) => {
            minecraftModule.modulo.select(argumentos, bot)
        }
    },
    {
        nombre: "lol",
        prefijo: "lol",
        funcion: (argumentos, bot) => {
            lolModule.modulo.select(argumentos, bot)
        }
    }
];
