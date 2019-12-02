/*
const fs = require('fs');
var moduleName = process.argv[2] || "sin comando";
console.log(moduleName);








fs.writeFile('model.js', "asd", (err) => {
    if (err) throw err;
    console.log('Lyric saved!');
});
*/
let name = "Maya", age = "30";
parseStr`My name is
 ${name}, and I'm ${age} years old`;
function parseStr(templates){
    console.log(templates);
    console.log(templates.raw);
    console.log(Object.values(templates))
}
