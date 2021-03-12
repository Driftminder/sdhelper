const { app, BrowserWindow } = require('electron')
const remote = require('electron').remote;
const path = require('path');



function createWindow () {
  const win = new BrowserWindow({
    width: 440,
    height: 630,
    webPreferences: {
      // Preload des header
      preload: path.join(app.getAppPath(), 'js/preload/index.js')
    },
  })
//   win.removeMenu()
  win.loadFile('indexes/index.html')

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
