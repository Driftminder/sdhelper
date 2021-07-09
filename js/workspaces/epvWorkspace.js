function generateTicket(){
    window.api.send("copyToClipboard", "Localisation: \n\nTel: \n\nPoste: ")
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
function triggerRelanceDemande(){
    window.api.send("copyToClipboard", `Utilisateur informé qu'il doit consulter les commentaires présents sur la demande ${document.getElementById("ticket").value != "" ? document.getElementById("ticket").value : "XXX"} actuellement en attente d'approbation auprès de la DSI`);
}

function triggerRelanceDemandeNoComment(){
    window.api.send("copyToClipboard", `Relance utilisateur sur la demande ${document.getElementById("ticket").value != "" ? document.getElementById("ticket").value : "XXX"} actuellement en attente d'approbation auprès de la DSI`)

}

function alfrescoRelance(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/epv/wiki-page?title=[CONSIGNE]_-_Relance_utilisateur_sur_demande_en_attente_d%27approbation");
}

function alfrescoEscalade(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/epv/document-details?nodeRef=workspace://SpacesStore/d07237e6-2c94-40bc-84f4-274470b0f625");
}

function resetWorkflow(){
    document.getElementById('localisation').checked = false;
    document.getElementById('téléphone').checked = false;
    document.getElementById('poste').checked = false;
    document.getElementById('cti').checked = false;
}