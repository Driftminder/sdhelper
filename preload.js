require('./js/mainProcess/contextBridge.js')
const db = require('electron-db');
const path = require('path');


window.addEventListener('DOMContentLoaded', () => {
    
    const locationNote = path.join(path.dirname(__dirname), 'extraResources', 'note.json');
    const locationTech = path.join(path.dirname(__dirname), 'extraResources', 'tech.json');


    const keyAZ = 'timerAZ'
    const keyAZADM = 'timerAZADM'
    const keyPXS = 'timerPXS'
    const keyAEP1 = 'timerAEPECO1'
    const keyAEP2 = 'timerAEPECO2'
    const keyTrigram = 'trigram'
    const keyNotePasteur = 'notePasteur'
    const keyNoteAZ = 'noteAZ'
    const keyNotePXS = 'notePXS'
    const keyNoteFDP = 'noteFDP'
    const keyNoteEPV = 'noteEPV'
    const keyNoteAEP = 'noteAEP'
   

    
    var pageID = document.title
    
    console.log(pageID)

    switch(pageID){

        case("info"):
            db.getField('tech', locationTech, keyAZ, (succ, data) => {
                var arg = data.toString()
                document.getElementById('currentAZTimer').innerHTML=arg
            })
            db.getField('tech', locationTech, keyAZADM, (succ, data) => {
                var arg = data.toString()
                document.getElementById('currentAZADMTimer').innerHTML=arg
            })
            db.getField('tech', locationTech, keyPXS, (succ, data) => {
                var arg = data.toString()
                document.getElementById('currentPXSTimer').innerHTML=arg
             })
             db.getField('tech', locationTech, keyAEP1, (succ, data) => {
                var arg = data.toString()
                document.getElementById('currentAEPECO1Timer').innerHTML=arg
             })
             db.getField('tech', locationTech, keyAEP2, (succ, data) => {
                var arg = data.toString()
                document.getElementById('currentAEPECO2Timer').innerHTML=arg
             })

         break;
         
         case("AZ"):
            db.getField('tech', locationTech, keyTrigram, (succ, data) => {
                var arg = data.toString()
                document.getElementById('techTrigrame').value=arg
            })
            db.getField('note', locationNote, keyNoteAZ, (succ, data) => {
                var arg = data.toString()
                document.getElementById('postIt').value=arg  
            })
            break;


            case("Pasteur"):
            db.getField('note', locationNote, keyNotePasteur, (succ, data) => {
                data = data.toString()
                document.getElementById('postIt').innerHTML = data       
            })
            break;

            case("PXS"):
            db.getField('note', locationNote, keyNotePXS, (succ, data) => {
                data = data.toString()
                document.getElementById('postIt').innerHTML = data       
            })
            break;

            case("AEP"):
            db.getField('note', locationNote, keyNoteAEP, (succ, data) => {
                data = data.toString()
                document.getElementById('postIt').innerHTML = data       
            })
            break;

            case("FDP"):
            db.getField('note', locationNote, keyNoteFDP, (succ, data) => {
                data = data.toString()
                document.getElementById('postIt').innerHTML = data       
            })
            break;

            case("EPV"):
            db.getField('note', locationNote, keyNoteEPV, (succ, data) => {
                data = data.toString()
                document.getElementById('postIt').innerHTML = data       
            })
            break;


         
         
    }

   
    
})


