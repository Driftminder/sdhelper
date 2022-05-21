const {
    contextBridge,
    ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld(
    "api",{
        send: (channel, data) => {
            let validChannels = ['copyToClipboard','insertName', 'changeContext', 'insertAZTimer', 'navigateur', 'updateTrigram', 'insertAZADMTimer', 'insertPXSTimer', 'insertAEPECO1Timer', 'insertAEPECO2Timer', 'loadingTimer', 'noteSavingPasteur', 'noteSavingAZ', 'noteSavingFDP', 'noteSavingAEP', 'noteSavingEPV', 'noteSavingPXS', 'deleteNoteAZ', 'deleteNoteAEP', 'deleteNoteEPV', 'deleteNoteFDP', 'deleteNotePXS', 'deleteNotePasteur' ];
            if(validChannels.includes(channel)){
                ipcRenderer.send(channel, data);
            }
        },
        on: (channel, data) => {
            let validChannels = ['getTrigram', 'fromMain']
            if(validChannels.includes(channel)){
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
)


