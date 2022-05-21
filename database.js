const db = require('electron-db');
const path = require('path');
const locationNote = path.join(__dirname, 'js','mainProcess', 'db');
const locationTech = path.join(__dirname, 'js','mainProcess', 'db');
const locationTemplatePasteur = path.join(__dirname, 'js','mainProcess', 'db');


function createTechSetting(){

  db.createTable('tech', locationTech,  (succ, msg) => {
    // succ - boolean, tells if the call is successful
    if (succ) {
    let obj = new Object();
  
    obj.settings = "settings"
    obj.techName = "";
    obj.trigram = "";
    obj.timerAZ = "";
    obj.timerPXS = "";
    obj.timerAZADM = "";
    obj.timerAEPECO1 = "";
    obj.timerAEPECO2 = "";
  
    db.insertTableContent('tech', locationTech, obj, (succ, msg) => {
        console.log("Successfuly insert object in Tech:" + succ);
        console.log("Message: " + msg);
    })
    console.log(msg)
    } else {
      console.log('La base a déjà été créer.')
    }
  })
}

function createTableNote(){
db.createTable('note', locationNote,  (succ, msg) => {
  // succ - boolean, tells if the call is successful
  if (succ) {

    let obj = new Object();
    obj.tableNote = "tableNote"
    obj.noteAZ = "";
    obj.notePXS = "";
    obj.noteFDP = "";
    obj.noteAEP = "";
    obj.noteEPV = "";
    obj.notePasteur = "";

    db.insertTableContent('note', locationNote, obj, (succ, msg) => {
      console.log("Successfuly insert object in Note:" + succ);
      console.log("Message: " + msg);
  })

    console.log(msg)
  } else {
    console.log('La base "Note" existe déjà ' + msg)
  }
})

}
//Création de la base de données Template
function createTablePasteur(){
  db.createTable('templatePasteur', locationTemplatePasteur,  (succ, msg) => {
    // succ - boolean, tells if the call is successful
    if (succ) {
  
      console.log(msg)
    } else {
      console.log('La base "templatePasteur" existe déjà ' + msg)
    }
  })
  
  }

createTablePasteur()
createTechSetting()
createTableNote()


