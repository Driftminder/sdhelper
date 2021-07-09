const {
    contextBridge,
    ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld(
    "api",{
        send: (channel, data) => {
            let validChannels = ['copyToClipboard', 'changeContext', 'resetTimer', 'navigateur'];
            if(validChannels.includes(channel)){
                ipcRenderer.send(channel, data);
            }
        }
    }
)


