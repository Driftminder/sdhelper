const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 440,
    height: 630,
    webPreferences: {
      nodeIntegration: true
    },
  })
//   win.removeMenu()
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)



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

