const db = require('electron-db');
const path = require('path');
const location = path.join(__dirname, 'js', 'mainProcess')

function createTechSetting(){

  db.createTable('tech', location,  (succ, msg) => {
    // succ - boolean, tells if the call is successful
    if (succ) {
    let obj = new Object();
  
    obj.trigram = "";
    obj.timerAZ = "";
    obj.timerAZADM = "";
    obj.timerAEPECO1 = "";
    obj.timerAEPECO2 = "";
  
    db.insertTableContent('tech', location, obj, (succ, msg) => {
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
db.createTable('note', location,  (succ, msg) => {
  // succ - boolean, tells if the call is successful
  if (succ) {
    console.log(msg)
  } else {
    console.log('La base "Note" existe déjà ' + msg)
  }
})

}

createTechSetting()
// db.createTable('tech', location,  (succ, msg) => {
//   // succ - boolean, tells if the call is successful
//   if (succ) {
//     console.log(msg)
//     createTechSetting()
//     createTableNote()
//   } else {
//     console.log('An error has occured. ' + msg)
//   }
// })



