function formattedDate(d = new Date) {
    var newDate = [d.getDate(), d.getMonth()+4, d.getFullYear()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
        return newDate;
  }
newDateAZ = formattedDate();
console.log(newDateAZ);

// function updateAZTimer($event){
//     var timer = formattedDate();
//     window.api.send('insertAZTimer', timer);
// }

function sendTrigram($event){
    var trigram = document.getElementById("techTrigrame").value != "" ? document.getElementById("techTrigrame").value : "XXX"
    window.api.send("updateTrigram", trigram)
}

function updateAZADMTimer($event){
    var timer = formattedDate();
    window.api.send('insertAZADMTimer', timer);
}

function updatePXSTimer($event){
    var timer = formattedDate();
    window.api.send('insertPXSTimer', timer);
}

function updateAEPECO1Timer($event){
    var timer = formattedDate();
    window.api.send('insertAEPECO1Timer', timer);
}

function updateAEPECO2Timer($event){
    var timer = formattedDate();
    window.api.send('insertAEPECO2Timer', timer);
}

function updateAZTimer($event){
    var timer = formattedDate();
    window.api.send('insertAZTimer', timer);
}

window.api.on("getTrigram", (trigram) => {
    document.getElementById("postIt").innerHTML= trigram;
})

window.api.on('getAZTimer', (timerAZ) => {
    document.getElementById("currentAZTimer").innerHTML = timerAZ;
})

window.api.on('getAZADMTimer', (timerAZADM) => {
    document.getElementById("currentAZADMTimer").innerHTML = timerAZADM;
})

window.api.on('getPXSTimer', (timerPXS) => {
    document.getElementById("currentPXSTimer").innerHTML = timerPXS;
})

window.api.on('getAEPECO1Timer', (timerAEPECO1) => {
    document.getElementById("currentAEPECO1Timer").innerHTML = timerAEPECO1;
})

window.api.on('getAEPECO2Timer', (timerAEPECO2) => {
    document.getElementById("currentAEPECP2Timer").innerHTML = timerAEPECO2;
})