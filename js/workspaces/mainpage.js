function formattedDate(d = new Date) {
    var newDate = [d.getDate(), d.getMonth()+4, d.getFullYear()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
        return newDate;
  }

  function PXSformattedDate(d = new Date) {
    var newDate = [d.getDate(), d.getMonth()+3, d.getFullYear()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
        return newDate;
  }

function sendTrigram($event){
    var trigram = document.getElementById("techTrigrame").value != "" ? document.getElementById("techTrigrame").value : "XXX"
    window.api.send("updateTrigram", trigram)
}

function updateAZADMTimer($event){
    var timer = formattedDate();
    window.api.send('insertAZADMTimer', timer);
}

function updatePXSTimer($event){
    var timer = PXSformattedDate();
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
