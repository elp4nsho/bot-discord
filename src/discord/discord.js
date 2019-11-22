var Discord = require('discord.io');
var auth = require('../configuration/auth');

exports.bot = function(){
    var bot = new Discord.Client({
        token: auth.token,
        autorun: true
     });
     return bot
}
