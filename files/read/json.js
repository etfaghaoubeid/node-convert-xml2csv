const fs = require('fs');
let result = fs.readFile('../json/file.json','utf8');
let r = JSON.parse(result)
console.log(r);
