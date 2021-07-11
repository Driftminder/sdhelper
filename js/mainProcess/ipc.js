const electron = require('electron')
const db = require('electron-db');
const path = require('path');
const clipboard = electron.clipboard;
const shell = electron.shell;
const { ipcMain, BrowserWindow, remote, ipcRenderer } = require('electron')


const location = path.join(__dirname, '')





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
    
    let obj = new Object();

    obj.trigram = arg;

    db.insertTableContent('tech', location, obj, (succ, msg) => {
            console.log("Successfuly:" + succ);
            console.log("Message: " + msg);
    })
})

ipcMain.on('insertAZTimer', (event, arg) => {
    console.log(arg + " AZ")
    let where = {
        "id": 1626041533875
    }
    
    let set = { 
        "timerAZ": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', location, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });

})

ipcMain.on('insertAZADMTimer', (event, arg) => {
    console.log(arg + " azdm")
    let where = {
        "id": 1626041533875
    }
    
    let set = { 
        "timerAZADM": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', location, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });

})


ipcMain.on('insertPXSTimer', (event, arg) => {
    console.log(arg + " PXS")
    let where = {
        "id": 1626041533875
    }
    
    let set = { 
        "timerPXS": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', location, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });

})


ipcMain.on('insertAEPECO1Timer', (event, arg) => {
    console.log(arg + " AEP ECO1")
    let where = {
        "id": 1626041533875
    }
    
    let set = { 
        "timerAEPECO1": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', location, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });

})

ipcMain.on('insertAEPECO2Timer', (event, arg) => {
    console.log(arg + "AEP ECO2")
    let where = {
        "id": 1626041533875
    }
    
    let set = { 
        "timerAEPECO2": arg
    }

    // console.log(arg)
    // console.log(location)
    
    db.updateRow('tech', location, where, set, (succ, msg) => {
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