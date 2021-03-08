const {
    contextBridge,
    ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld(
    "api",{
        send: (channel, data) => {
            let validChannels = ['copyToClipboard', 'changeContext'];
            if(validChannels.includes(channel)){
                ipcRenderer.send(channel, data);
            }
        }
    }
)


