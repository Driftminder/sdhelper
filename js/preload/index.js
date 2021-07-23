require('./contextBridge.js')
const db = require('electron-db');
const path = require('path');


window.addEventListener('DOMContentLoaded', () => {
    const location = path.join(__dirname, 'datastore')
    const keyAZ = 'timerAZ'
    db.getField('tech', location, keyAZ, (succ, data) => {
        var arg = data.toString()
        console.log(arg + " Renderer")
        document.getElementById('currentAZTimer').innerHTML=arg
     })
    
})
