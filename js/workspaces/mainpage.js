function resetTimerAZ(){

    window.api.send("resetTimer", `${newDateAZ}`)
}

function resetTimerFDP(){

    window.api.send("resetTimer", `${newDateFDP}`)
}

function resetTimerPasteur(){

    window.api.send("resetTimer", `${newDatePasteur}`)
}

function resetTimerAEP(){

    window.api.send("resetTimer", `${newDateAEP}`)
}

function resetTimerPXS(){
    

    window.api.send("resetTimer", `${newDatePXS}`, )
}

function resetTimerAZADM(){
    
    window.api.send("resetTimer", "AZADM")
}

function resetTimer(clientID) {
    window.api.send("resetTimer", clientID);
}

// function formattedDate(d = new Date) {
    //     var newDate = [d.getDate(), d.getMonth()+4, d.getFullYear()]
    //         .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
    //         return newDate;
    //   }
    //  newDateAZ = formattedDate();
    //  console.log(newDatePXS);