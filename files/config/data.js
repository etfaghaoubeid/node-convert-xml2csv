const {LISTEPA} = require('../../app')
let myData = []  
// let i =0
// for (let e of LISTEPA.BIEN){
// console.log('++++++++++++++++++++++++++++++++',e.INFO_GENERALES)

//   var {INFO_GENERALES,AGENCE,VENTE,APPARTEMENT,
//     LOCALISATION,DEFISCALISATION,INTITULE,
//     COMMENTAIRES,ALUR,VIAGER,IMAGES,MAISON} = e

  for(let i =0 ;i<LISTEPA.BIEN.length;i++){
    
  
  myData.push(
    {
  
  'AFF_ID':`${LISTEPA.BIEN[0].INFO_GENERALES.AFF_ID._text}`, 
  'AFF_NUM':`${LISTEPA.BIEN[0].INFO_GENERALES.AFF_NUM._text}`, 
   'ACHAT':"",
    'LOCATION':`${LISTEPA.BIEN[0].LOCATION}`,
     'CATEGORIE_MERE' :`${LISTEPA.BIEN[0].APPARTEMENT.CATEGORIE_MERE._text}`, 
     'CATEGORIE':`${LISTEPA.BIEN[0].APPARTEMENT.CATEGORIE._text}`,
     'CODE_POSTAL':`${LISTEPA.BIEN[0].LOCALISATION.CODE_POSTAL._text}`, 
     'VILLE':`${LISTEPA.BIEN[0].LOCALISATION.VILLE._text}`,
     'PAYS':`${LISTEPA.BIEN[0].LOCALISATION.PAYS._text}`,
     'PRIX':`${LISTEPA.BIEN[0].VENTE.PRIX._text}`,
     'LOYER':`${LISTEPA.BIEN[0].LOCATION}`,
     'CHARGES':`{${LISTEPA.BIEN[0].ALUR.CHARGES_ANNUELLES._text}}`,
     'MONTANT_HONO_ACQ':`${LISTEPA.BIEN[0].VENTE.MONTANT_HONO_ACQ}`,
     'FRAIS_AGENCE':`${LISTEPA.BIEN[0].LOCATION}`,
     'NOM_FRANCAIS':`${LISTEPA.BIEN[0].AGENCE}`,
     'DESCRIPTION':"",
     'LIBRELE':`{${LISTEPA.BIEN[0].INFO_GENERALES.LIBRELE._text}}`,
     'SURFACE_HABITABLE':`${LISTEPA.BIEN[0].APPARTEMENT.SURFACE_HABITABLE._text}`,
     'SURFACE_TERRAIN':`${LISTEPA.BIEN[0].APPARTEMENT.SURFACE_TERRAIN._text}`,
     'NBRE_PIECES':`${LISTEPA.BIEN[0].APPARTEMENT.NBRE_PIECES._text}`,
     'NBRE_CHAMBRES':`${LISTEPA.BIEN[0].APPARTEMENT.NBRE_CHAMBRES._text}`,
     'NUM_ETAGE':`${LISTEPA.BIEN[0].DEMEURE}`,
     'NUM_DERNIER_ETAGE':`${LISTEPA.BIEN[0].DEMEURE}`,
     'MEUBLE':`${LISTEPA.BIEN[0].APPARTEMENT.MEUBLE._text}`,
     'NBRE_SALLE_BAIN':`${LISTEPA.BIEN[0].APPARTEMENT.MEUBLE._text}`,
     'NBRE_SALLE_EAU':`${LISTEPA.BIEN[0].APPARTEMENT.NBRE_SALLE_EAU}`,
     'NBRE_WC':`${LISTEPA.BIEN[0].APPARTEMENT.NBRE_WC._text}`,
     'CHAUFFAGE':`${LISTEPA.BIEN[0].APPARTEMENT.CHAUFFAGE}`,
     'CUISINE':`${LISTEPA.BIEN[0].APPARTEMENT.CUISINE}`,
     'NBRE_BALCON':`${LISTEPA.BIEN[0].APPARTEMENT.NBRE_BALCON}`,
     'ASCENSEUR':`${LISTEPA.BIEN[0].APPARTEMENT.ASCENSEUR}`,
     'NBRE_CAVES':`${LISTEPA.BIEN[0].APPARTEMENT.NBRE_CAVES}`,
     'NBRE_PARKING':`${LISTEPA.BIEN[0].APPARTEMENT.NBRE_PARKING}`,
     'NBRE_GARAGE':`${LISTEPA.BIEN[0].APPARTEMENT.NBRE_GARAGE}`,
     'DIGICODE':`${LISTEPA.BIEN[0].APPARTEMENT.DIGICODE}`,
     'INTERPHONE':`${LISTEPA.BIEN[0].APPARTEMENT.INTERPHONE}`,
     'GARDIEN':`${LISTEPA.BIEN[0].APPARTEMENT.GARDIEN}`,
     'NBRE_TERRASSE':`${LISTEPA.BIEN[0].APPARTEMENT.NBRE_TERRASSE}`,
     'ALARME':`${LISTEPA.BIEN[0].MAISON}`,
     'CALME':`${LISTEPA.BIEN[0].APPARTEMENT.CALME}`,
     'CLIMATISATION':`${LISTEPA.BIEN[0].MAISON}`,
     'PISCINE':`${LISTEPA.BIEN[0].MAISON}`,
     'ACCES_HANDICAPES':`${LISTEPA.BIEN[0].MAISON}`,
     'CHEMINEE':`${LISTEPA.BIEN[0].APPARTEMENT.CHEMINEE}`,
     'URL_360':"`${LISTEPA.BIEN[0].}",
     'VISITE_VIRTUELLE':`${LISTEPA.BIEN[0].INFO_GENERALES.VISITE_VIRTUELLE._cdata}`,
     'NUM_MANDAT':`${LISTEPA.BIEN[0].VENTE.NUM_MANDAT}`,
     'AGENCE_ADRESSE':`${LISTEPA.BIEN[0].AGENCE.AGENCE_ADRESSE._cdata}`,
     'AGENCE_CP':`${LISTEPA.BIEN[0].AGENCE.AGENCE_CP._text}`,
     'AGENCE_VILLE':`${LISTEPA.BIEN[0].AGENCE.AGENCE_VILLE._cdata}`,
     'AGENCE_TELEPHONE':`${LISTEPA.BIEN[0].AGENCE.AGENCE_TELEPHONE._text}`,
     'AGENCE PORTABLE ':`${LISTEPA.BIEN[0].AGENCE.AGENCE_PORTABLE}`,
     'AGENCE_NOM':`${LISTEPA.BIEN[0].AGENCE.AGENCE_NOM._cdata}`,
     'LATITUDE':"`${LISTEPA.BIEN[0].}",
     'LONGITUDE':"hello",
    }
  );
   
}
//console.log(myData);
exports.myData= myData
  