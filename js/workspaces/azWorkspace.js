const modes = {
    TEL: 0,
    MAIL: 1
}


var selectedTicketMode = 0;

Object.keys(modes).forEach(key => {
    console.log(key);
    var option = document.createElement('option')
    option.innerHTML = key
    option.value = modes[key]
    document.getElementById("modesCheck").appendChild(option)
});

function changeSelectedTicketMode($event){
    selectedTicketMode = parseInt($event.value)
}

function generateTicket(){
    var name = document.getElementById("techTrigrame").value != "" ? document.getElementById("techTrigrame").value : "XXX"
    var fulldate = new Date(Date.now()).toLocaleString().split(", ")
    var date = fulldate[0]
    var time = fulldate[1].split(":")[0]+":"+fulldate[1].split(":")[1]
    var readableMode 
    switch(selectedTicketMode){
        case modes.TEL:
            readableMode = "TEL"
            break;
        case modes.MAIL:
            readableMode = "MAIL"
            break;
    }
    window.api.send("copyToClipboard", `PAC ${name} le ${date} à ${time} ${readableMode}\nNom :\nPrénom :\nN° Tél. :\nSite :\nPoste :`);
}

function generateContact(){
    var name = document.getElementById("techTrigrame").value != "" ? document.getElementById("techTrigrame").value : "XXX"
    var fulldate = new Date(Date.now()).toLocaleString().split(", ")
    var date = fulldate[0]
    var time = fulldate[1].split(":")[0]+":"+fulldate[1].split(":")[1]
    var readableMode 
    var contactAppel
    switch(selectedTicketMode){
        case modes.TEL:
            readableMode = "TEL"
            contactAppel = "APPEL"
            break;
        case modes.MAIL:
            readableMode = "MAIL"
            contactAppel = "MAIL"
            break;
    }
    window.api.send("copyToClipboard", `PAC ${name} le ${date} à ${time} ${readableMode}\n[${contactAppel} ENTRANT]\n\n------------------------`);
}

function triggerRelance1AZ(){
    var name = document.getElementById("techTrigrame").value != "" ? document.getElementById("techTrigrame").value : "XXX"
    var fulldate = new Date(Date.now()).toLocaleString().split(", ")
    var date = fulldate[0]
    var time = fulldate[1].split(":")[0]+":"+fulldate[1].split(":")[1]
    var readableMode 
    switch(selectedTicketMode){
        case modes.TEL:
            readableMode = "TEL"
            break;
        case modes.MAIL:
            readableMode = "MAIL"
            break;
    }
    window.api.send("copyToClipboard", `PAC ${name} le ${date} à ${time} ${readableMode}\nDescription : [Relance Sortante 1]\n R1 TEL MEVO LAISSE + MAIL ENVOYE`);
}

function triggerRelance2AZ(){
    var name = document.getElementById("techTrigrame").value != "" ? document.getElementById("techTrigrame").value : "XXX"
    var fulldate = new Date(Date.now()).toLocaleString().split(", ")
    var date = fulldate[0]
    var time = fulldate[1].split(":")[0]+":"+fulldate[1].split(":")[1]
    var readableMode 
    switch(selectedTicketMode){
        case modes.TEL:
            readableMode = "TEL"
            break;
        case modes.MAIL:
            readableMode = "MAIL"
            break;
    }
    window.api.send("copyToClipboard", `PAC ${name} le ${date} à ${time} ${readableMode}\nDescription : [Relance Sortante 2]\n R2 TEL/MEVO LAISSE + MAIL ENVOYE`);
}

function triggerRelance3AZ(){
    var name = document.getElementById("techTrigrame").value != "" ? document.getElementById("techTrigrame").value : "XXX"
    var fulldate = new Date(Date.now()).toLocaleString().split(", ")
    var date = fulldate[0]
    var time = fulldate[1].split(":")[0]+":"+fulldate[1].split(":")[1]
    var readableMode 
    switch(selectedTicketMode){
        case modes.TEL:
            readableMode = "TEL"
            break;
        case modes.MAIL:
            readableMode = "MAIL"
            break;
    }
    window.api.send("copyToClipboard", `PAC ${name} le ${date} à ${time} ${readableMode}\nDescription : [Relance Sortante 3]\n R3 TEL/MEVO LAISSE + MAIL ENVOYE CLOTURE`);
}

function alfrescoRelance(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/antargaz-finagaz-azfz/document-details?nodeRef=workspace://SpacesStore/d7815e62-b942-49b0-b5c2-7bc3887dbee8");
}

function resetWorkflow(){
    document.getElementById('timeStamp').checked = false;
    document.getElementById('name').checked = false;
    document.getElementById('téléphone').checked = false;
    document.getElementById('poste').checked = false;
    document.getElementById('workNote').checked = false;
    document.getElementById('pièceJointe').checked = false;
    document.getElementById('mail').checked = false;
}