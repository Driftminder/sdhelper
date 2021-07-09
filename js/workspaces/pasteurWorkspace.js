function generateTicket(){
    window.api.send("copyToClipboard", "Symptôme(s): \n\nTel: \n\nPoste: \n\nAdresse IP: \n\n");
}

function alfrescoEscalade(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/institut-pasteur-ip/document-details?nodeRef=workspace://SpacesStore/f4939354-691c-4b38-9fc5-92770e632a07")
}

function alfrescoRelanceEntrante(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/institut-pasteur-ip/wiki-page?title=[CONSIGNE]_Gestion_des_relances_entrantes_par_le_SD")
}

function alfrescoRelanceSortante(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/institut-pasteur-ip/wiki-page?title=[CONSIGNE]_Gestion_des_relances_sortantes_par_le_SD")
}

function resetWorkflow(){
    document.getElementById('description').checked = false;
    document.getElementById('téléphone').checked = false;
    document.getElementById('idMateriel').checked = false;
    document.getElementById('workNote').checked = false;
    document.getElementById('pièceJointe').checked = false;
    
}