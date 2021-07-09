const electron = require('electron')
const clipboard = electron.clipboard;
const shell = electron.shell;
const { ipcMain, BrowserWindow, remote } = require('electron')

function calculateNewDate(dateObject) {
    var date = new Date();
    if (dateObject.months) date.setMonth(date.getMonth() + dateObject.months);
    if (dateObject.days) date.setDate(date.getDate() + dateObject.days);
    return date;
}

ipcMain.on('copyToClipboard', (event, arg) =>{
    clipboard.writeText(arg);
})

ipcMain.on('changeContext', (event, arg) =>{
    let focusedWindow = BrowserWindow.getFocusedWindow()
    focusedWindow.loadURL(`file://${__dirname}/../../indexes/` + arg)
})

ipcMain.on('getAllTimers', (event, arg) =>{
    return TimersService.getAllTimers();
});

ipcMain.on('resetTimer', (event, arg) =>{
    
    var clientID = arg;
    var dateObject = TimersService.durations.find(element => element.uuid == clientID);
    return TimersService.updateTimer(clientID, calculateNewDate(dateObject));
});

ipcMain.on('saveTechName', (event, arg) =>{
    return TechService.getTechName();
})

ipcMain.on('navigateur', (event, arg) =>{
    console.log(arg);
    var lien = arg
    return shell.openExternal(lien);
})