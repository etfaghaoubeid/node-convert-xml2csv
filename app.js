var convert = require('xml-js');
var fs = require("fs");
const { Parser } = require('json2csv');

var xml = fs.readFileSync('./files/file.xml', 'utf8');
var options = {ignoreComment: true, alwaysChildren: true,spaces:'\t',compact:false};
var result = convert.xml2json(xml, options);  



// write into json File
fs.writeFile("./files/file.json", result, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});





