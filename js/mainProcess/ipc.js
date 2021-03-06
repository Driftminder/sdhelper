const electron = require('electron')
const clipboard = electron.clipboard;
const { ipcMain } = require('electron')

ipcMain.on('copyToClipboard', (event, arg) =>{
    clipboard.writeText(arg);
})