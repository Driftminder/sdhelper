const electron = require('electron')
const clipboard = electron.clipboard;
const { ipcMain, BrowserWindow, remote } = require('electron')

ipcMain.on('copyToClipboard', (event, arg) =>{
    clipboard.writeText(arg);
})

ipcMain.on('changeContext', (event, arg) =>{
    let focusedWindow = BrowserWindow.getFocusedWindow()
    focusedWindow.loadURL(`file://${__dirname}/../../indexes/` + arg)
})