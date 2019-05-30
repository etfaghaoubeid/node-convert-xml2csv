var convert = require('xml-js');
var fs = require('fs');
const { Parser } = require('json2csv');
const util = require('util')
var xml = fs.readFileSync('./files/xml/file.xml', 'utf8');
var options = {ignoreComment: true, alwaysChildren: false,spaces:'\t',compact:true,ignoreAttributes:true,};
var result = convert.xml2json (xml, options);  



let javaScritObject = JSON.parse(result)
console.log(util.inspect(javaScritObject, {showHidden: false, depth: null}))
//console.log(javaScritObject)
let {INFO_GENERALES,AGENCE,VENTE,APPARTEMENT,
  LOCALISATION,DEFISCALISATION,INTITULE,
  COMMENTAIRES,ALUR,VIAGER,IMAGES}=javaScritObject.LISTEPA.BIEN
exports.INFO_GENERALES = INFO_GENERALES;
exports.AGENCE = AGENCE;
exports.VENTE = VENTE
exports.APPARTEMENT = APPARTEMENT,
exports.LOCALISATION = LOCALISATION
exports.DEFISCALISATION = DEFISCALISATION;
exports.INTITULE = INTITULE;
exports.COMMENTAIRES = COMMENTAIRES;
exports.ALUR = ALUR;
exports.VIAGER = VIAGER;
exports.IMAGES = IMAGES;






// write into json File
fs.writeFile("./files/json/file.json", result, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
const {fields} = require('./files/config/fields')
const {myData} = require('./files/config/data')

  
const json2csvParser = new Parser({ fields, unwind: ['AFF_ID._txt', 'items.items'] });
const csv = json2csvParser.parse(myData);

fs.writeFile('./files/fillle.csv',csv,err=>console.log(err))






