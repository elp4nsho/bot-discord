const Discord = require('discord.js');

var auth = require('../configuration/auth');


var bota = new Discord.Client();
bota.login(auth.token)

exports.bot = function(){
         return bota
};
