const context = {
    MAIN: 0,
    FDP: 1,
    ANTARGAZ: 2,
    PROXISERVE: 3,
    PASTEUR: 4,
    EPV: 5,
    AEP: 6

}

Object.keys(context).forEach(key => {
    console.log(key);
    var option = document.createElement('option')
    option.innerHTML = key
    option.value = context[key]
    document.getElementById("windowSwitch").appendChild(option)
});

function clearContents() {
    console.log("clear");
    document.getElementById("postIt").innerHTML="";
}

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

        case context.MAIN:
            window.api.send("changeContext", "index.html")
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