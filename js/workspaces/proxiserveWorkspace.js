function generateTicket(){
    window.api.send("copyToClipboard", "Description:\n\nTel :\n\nAdresse IP:");
}

function triggerRelance1(){
    window.api.send("copyToClipboard", "Bonjour,\n\n\nNous avons essayés de vous joindre afin de prendre en charge votre incident, cependant nous sommes sans réponse de votre part.\n\nMerci de nous recontacter au : 01.69.18.35.15\n\n\nCordialemnt,\n\n\nLe support Proxiserve")
}

function triggerRelance2(){
    window.api.send("copyToClipboard", "Bonjour,\n\n\nNous avons essayés de vous joindre afin de prendre en charge votre incident, cependant nous sommes sans réponse de votre part.\nMerci de nous recontacter au : 01.69.18.35.15\n\n\nCordialemnt,\n\n\nLe support Proxiserve")
}

function triggerRelance3(){
    window.api.send("copyToClipboard", "Bonjour,\n\n\nLe Service Desk a tenté de vous joindre à de multiples reprises sans succès.\n\n\nN'ayant pas eu de réponse à nos relances précédentes, le dossier sera  clôturé\n\nService Desk Proxiserve\n\n01.69.18.67.82")
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

function triggerWorkflow(){
    window.api.send("copyToClipboard", "Bonjour,\n\nVous avez ouvert un dossier au service desk afin de demander ????????????\n\nCette demande doit faire l'objet d'une ouverture de dossier via le Workflow.\n\nLe service desk ne peut donner suite à ce type de demande.\n\nVotre dossier va être clôturé.\n\nCordialement,\n\nLe Service Desk")
}

function triggerResolve(){
    window.api.send("copyToClipboard","Bonjour,\n\nLe Service Desk a tenté de vous joindre à de multiples reprises sans succès.\n\nN'ayant pas eu de réponse à nos relances précédentes, le dossier sera  clôturé\n\nCordialement, \n\nXXXXXX\n\nService Desk Proxiserve\n\n01.69.18.67.82");
}

function triggerNoDate(){
    window.api.send("copyToClipboard","Ticket erroné car incomplet.  Non exploitable en l'état.\n\nMerci d'en rouvrir un nouveau si nécessaire.\n\nCordialement, le support Econocom");
}

function alfrescoEscalade(){
    window.api.send("navigateur", "https://econocom.sharepoint.com/:x:/r/sites/C2SSDTours/_layouts/15/Doc.aspx?sourcedoc=%7B1CE8C2C6-DA87-40C5-BCCD-839D44607015%7D&file=PXS%20-%20Fichier%20d%27escalade.xlsx&action=edit&mobileredirect=true&wdPreviousSession=4cbe5ce9-9d65-4502-88ec-0a18f3be4459&wdOrigin=TEAMS-ELECTRON.teams.undefined&cid=fdbffb69-5764-4f79-9b4f-2b4c8d92f108");
}

function alfrescoRelance(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/proxiserve-pxs/wiki-page?title=Suivi_des_dossiers_(relance)");
}

function resetWorkflow(){
    document.getElementById('téléphone').checked = false;
    document.getElementById('adresseIP').checked = false;
    document.getElementById('workNote').checked = false;
    document.getElementById('pièceJointe').checked = false;
    
}

function helperAlert(){
    window.alert("Pas de nouvelle information.")
}

