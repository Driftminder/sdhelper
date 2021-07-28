require('dotenv').config()
require('./database')
const { shell, ipcMain } = require('electron')
const { app, BrowserWindow } = require('electron')
const remote = require('electron').remote;
const path = require('path');
require('update-electron-app')({
  repo: 'Driftminder/sdhelper',
  updateInterval: '1 hour',
  logger: require('electron-log')
})


// console.log(process.env);

let win;

function createWindow () {
  const win = new BrowserWindow({
    width: 700,
    height: 630,
    icon:"img/icon.ico",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Preload des header
      preload: path.join(__dirname, 'preload.js')
    },
  })
  win.removeMenu()
  win.loadFile('indexes/index.html')
  // win.setMaximumSize(700, 630);

}

app.whenReady().then(createWindow)

// Chargement des différents process comme IPC qui permet de faire fonctionner le electron.clipboard
require("./js/mainProcess/index.js")

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


try{
    require('electron-reloader')(module)
}catch(_){}


ipcMain.on("toMain", (event) => {
    var responseObj = "Ceci est un nouveau jour"
    console.log("iPC main Test")
    win.webContents.send("fromMain", responseObj);
  
});