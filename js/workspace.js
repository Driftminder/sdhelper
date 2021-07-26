
const context = {
    MAIN:0,
    FDP: 1,
    ANTARGAZ: 2,
    PROXISERVE: 3,
    PASTEUR: 4,
    EPV: 5,
    AEP: 6,
    INFO: 7
}

Object.keys(context).forEach(key => {
    //console.log(key);
    var option = document.createElement('option')
    option.innerHTML = key
    option.value = context[key]
    document.getElementById("windowSwitch").appendChild(option)
});


function selectContextWindow($event){
    console.log($event.value)

    switch(parseInt($event.value)){
        case context.FDP:
            window.api.send("changeContext", "fdpIndex.html")
            break;
        
        case context.ANTARGAZ:
            window.api.send("changeContext", "azIndex.html")
            break;

        case context.PROXISERVE:
            window.api.send("changeContext", "proxiserveIndex.html")
            break;

        case context.PASTEUR:
            window.api.send("changeContext", "pasteurIndex.html")
            break;

        case context.EPV:
            window.api.send("changeContext", "epvIndex.html")
            break;
        
        case context.AEP:
            window.api.send("changeContext", "aepIndex.html")
            break;

        case context.INFO:
            window.api.send("changeContext", "infoIndex.html")
    }
}



function triggerNRP1(){
    window.api.send("copyToClipboard", "APPEL SORTANT 1 / NRP / MEVO / MAIL");
}

function triggerNRP2(){
    window.api.send("copyToClipboard", "APPEL SORTANT 2 / NRP / MEVO / MAIL");
}

function triggerNRP3(){
    window.api.send("copyToClipboard", "APPEL SORTANT 3 / NRP / MEVO / MAIL");
}

function noteSavingAZ(){
    
    var note = document.getElementById("postIt").value

    window.api.send("noteSavingAZ", note)
    
}

function noteSavingAEP(){
    
    var note = document.getElementById("postIt").value

    window.api.send("noteSavingAEP", note)
    
}

function noteSavingFDP(){
    
    var note = document.getElementById("postIt").value

    window.api.send("noteSavingFDP", note)
    
}

function noteSavingPasteur(){
    
    var note = document.getElementById("postIt").value

    window.api.send("noteSavingPasteur", note)
    
}

function noteSavingEPV(){
    
    var note = document.getElementById("postIt").value

    window.api.send("noteSavingEPV", note)
    
}

function noteSavingPXS(){
    
    var note = document.getElementById("postIt").value

    window.api.send("noteSavingPXS", note)
    
}

function deleteNoteFDP(){
    document.getElementById("postIt").innerHTML = ""
    window.api.send("deleteNoteFDP", "")
    
}

function deleteNotePXS(){
    document.getElementById("postIt").innerHTML = ""
    window.api.send("deleteNotePXS", "")
    
}

function deleteNoteEPV(){
    document.getElementById("postIt").innerHTML = ""
    window.api.send("deleteNoteEPV", "")
    
}

function deleteNoteAEP(){
    document.getElementById("postIt").innerHTML = ""
    window.api.send("deleteNoteAEP", "")
    
}

function deleteNoteAZ(){
    document.getElementById("postIt").innerHTML = ""
    window.api.send("deleteNoteAZ", "")
    
}

function deleteNotePasteur(){
    document.getElementById("postIt").innerHTML = ""
    window.api.send("deleteNotePasteur", "")
    
}

