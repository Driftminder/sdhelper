const {
    contextBridge,
    ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld(
    "api",{
        send: (channel, data) => {
            let validChannels = ['copyToClipboard'];
            if(validChannels.includes(channel)){
                ipcRenderer.send(channel, data);
            }
        }
    }
)
