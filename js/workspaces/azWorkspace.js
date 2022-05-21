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
    var name = document.getElementById("techTrigrame").textContent != "" ? document.getElementById("techTrigrame").textContent : "XXX"
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
    var name = document.getElementById("techTrigrame").textContent != "" ? document.getElementById("techTrigrame").textContent : "XXX"
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

function generateContactSortant(){
    var name = document.getElementById("techTrigrame").textContent != "" ? document.getElementById("techTrigrame").textContent : "XXX"
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
    window.api.send("copyToClipboard", `PAC ${name} le ${date} à ${time} ${readableMode}\n[${contactAppel} SORTANT]\n\n------------------------`);
}

function triggerRelance1AZ(){
    var name = document.getElementById("techTrigrame").textContent != "" ? document.getElementById("techTrigrame").textContent : "XXX"
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
    window.api.send("copyToClipboard", `PAC ${name} le ${date} à ${time} ${readableMode}\nDescription : [Relance Sortante 1]\n R1 TEL MEVO LAISSE + MAIL ENVOYE\n------------`);
}

function triggerRelance2AZ(){
    var name = document.getElementById("techTrigrame").textContent != "" ? document.getElementById("techTrigrame").textContent : "XXX"
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
    window.api.send("copyToClipboard", `PAC ${name} le ${date} à ${time} ${readableMode}\nDescription : [Relance Sortante 2]\n R2 TEL/MEVO LAISSE + MAIL ENVOYE\n------------`);
}

function triggerRelance3AZ(){
    var name = document.getElementById("techTrigrame").textContent != "" ? document.getElementById("techTrigrame").textContent : "XXX"
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
    window.api.send("copyToClipboard", `PAC ${name} le ${date} à ${time} ${readableMode}\nDescription : [Relance Sortante 3]\n R3 TEL/MEVO LAISSE + MAIL ENVOYE CLOTURE\n------------`);
}

function alfrescoRelance(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/antargaz-finagaz-azfz/document-details?nodeRef=workspace://SpacesStore/d7815e62-b942-49b0-b5c2-7bc3887dbee8");
}

function clotureDemande(){
    window.api.send("copyToClipboard", "Bonjour\n\nToute demande doit être saisie depuis le portail ISILOG\nVous avez pris contact avec le PAC pour une demande de ?????????????????\nVoici le lien d'accès:  http://isilog/IsilogWebSystem/Pages/Main/MainPage.aspx?IwsId=12.\nIl faut choisir l'onglet le plus proche de votre demande  et remplir le formulaire , en précisant les détails dans le champ en bas du formulaire.\nSi vous avez besoin de plus d'informations ou d'aide n'hésitez pas à reprendre contact avec notre service.")
}

function clotureRelance(){
    window.api.send(`copyToClipboard", "Bonjour,\n\nN'ayant pas eu de retour suite à mes trois relances, je permets de résoudre votre dossier.\n\nSi le problème est toujours d'actualité, je vous invite à nous recontacter au 01.41.28.84.37 dans les 5 jours ouvrés\n\nCordialement,\n\n${trigrame}\n\nPAC\n\nTel : 01.41.28.84.37\n\nMail : pac@antargaz.com`)
}

function noteOlfeo(){
    var name = document.getElementById("techTrigrame").textContent != "" ? document.getElementById("techTrigrame").textContent : "XXX"
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
    window.api.send("copyToClipboard", `Incident\n\nNIVEAU3\n*PB Reseau\n*Proxy\nOLFEO - URL BLOQUEE\nUne URL est bloquée par le proxy OLFEO\nPAC ${name} le ${date} à ${time} ${readableMode}\nNom :\nPrénom :\nN° Tél. :\nSite\nDescription : Une url est bloquée par le proxy Olfeo. Pouvez-vous la débloquer s'il vous plait ?`)
}

function noteProofpoint(){
    var name = document.getElementById("techTrigrame").textContent != "" ? document.getElementById("techTrigrame").textContent : "XXX"
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
    window.api.send("copyToClipboard", `Assistance\nNIVEAU2\n*PB Infrastructure\n*Proofpoint\n\nPROOFPOINT - MAIL BLOQUE\nUn mail est bloqué par Proofpoint.\nPAC ${name} le ${date} à ${time} ${readableMode}\nNom :\nPrénom :\nN° Tél. :\nSite :\nDescription : Proofpoint bloque un mail et Monsieur/Madame X souhaite le récupérer, pouvez-vous le débloquer s’il vous plait?`)
}