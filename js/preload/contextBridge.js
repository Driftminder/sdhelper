const {
    contextBridge,
    ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld(
    "api",{
        send: (channel, data) => {
            let validChannels = ['copyToClipboard', 'changeContext', 'insertAZTimer', 'navigateur', 'updateTrigram', 'insertAZADMTimer', 'insertPXSTimer', 'insertAEPECO1Timer', 'insertAEPECO2Timer'];
            if(validChannels.includes(channel)){
                ipcRenderer.send(channel, data);
            }
        },
        on: (channel, data) => {
            let validChannels = ['getTrigram']
            if(validChannels.includes(channel)){
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
)


