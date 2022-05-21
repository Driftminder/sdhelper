const electron = require('electron')
const db = require('electron-db');
const path = require('path');
const clipboard = electron.clipboard;
const shell = electron.shell;
const { ipcMain, BrowserWindow, remote, ipcRenderer } = require('electron')

const locationNote = path.join(__dirname, 'db');
const locationTech = path.join(__dirname, 'db');



function calculateNewDate(dateObject) {
    var date = new Date();
    if (dateObject.months) date.setMonth(date.getMonth() + dateObject.months);
    if (dateObject.days) date.setDate(date.getDate() + dateObject.days);
    return date;
}

ipcMain.on('copyToClipboard', (event, arg) =>{
    clipboard.writeText(arg);
})


ipcMain.on('updateTrigram', (event, arg) =>{
    
    let where = {
        "settings": "settings"
    }
    
    let set = { 
        "trigram": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', locationTech, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('insertAZTimer', (event, arg) => {
    console.log(arg + " AZ")
    let where = {
        "settings": "settings"
    }
    
    let set = { 
        "timerAZ": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', locationTech, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });

})

ipcMain.on('insertAZADMTimer', (event, arg) => {
    console.log(arg + " azdm")
    let where = {
        "settings": "settings"
    }
    
    let set = { 
        "timerAZADM": arg
    }

    
    db.updateRow('tech', locationTech, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });

})


ipcMain.on('insertPXSTimer', (event, arg) => {
    console.log(arg + " PXS")
    let where = {
        "settings": "settings"
    }
    
    let set = { 
        "timerPXS": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', locationTech, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });

})


ipcMain.on('insertAEPECO1Timer', (event, arg) => {
    console.log(arg + " AEP ECO1")
    let where = {
        "settings": "settings"
    }
    
    let set = { 
        "timerAEPECO1": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', locationTech, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });

})

ipcMain.on('insertAEPECO2Timer', (event, arg) => {
    console.log(arg + "AEP ECO2")
    let where = {
        "settings": "settings"
    }
    
    let set = { 
        "timerAEPECO2": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', locationTech, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });

})



ipcMain.on('changeContext', (event, arg) =>{
    let focusedWindow = BrowserWindow.getFocusedWindow()
    focusedWindow.loadURL(`file://${__dirname}/../../indexes/` + arg)
})


ipcMain.on('navigateur', (event, arg) =>{
    console.log(arg);
    var lien = arg
    return shell.openExternal(lien);
})

ipcMain.on('noteSavingPasteur', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }
    
    let set = { 
        "notePasteur": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('noteSavingAZ', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }
    
    let set = { 
        "noteAZ": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('noteSavingPXS', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }
    
    let set = { 
        "notePXS": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('noteSavingFDP', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }
    
    let set = { 
        "noteFDP": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('noteSavingEPV', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }
    
    let set = { 
        "noteEPV": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('noteSavingAEP', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }
    
    let set = { 
        "noteAEP": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

// ----------------------------------------------------------------------------------------

ipcMain.on('deleteNoteFDP', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }

    note = ""
    
    let set = { 
        "noteFDP": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('deleteNotePXS', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }

    note = ""
    
    let set = { 
        "notePXS": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('deleteNoteAEP', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }

    note = ""
    
    let set = { 
        "noteAEP": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('deleteNoteEPV', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }

    note = ""
    
    let set = { 
        "noteEPV": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('deleteNoteAZ', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }

    note = ""
    
    let set = { 
        "noteAZ": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('deleteNotePasteur', (event, note) => {
    let where = {
        "tableNote": "tableNote"
    }

    note = ""
    
    let set = { 
        "notePasteur": note
    }

    db.updateRow('note', locationNote, where, set, (succ, msg) => {
       
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})

ipcMain.on('insertName', (event, arg) =>{
    
    let where = {
        "settings": "settings"
    }
    
    let set = { 
        "techName": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', locationTech, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
})