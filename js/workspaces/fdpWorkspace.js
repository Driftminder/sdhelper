function generateTicket(){
    window.api.send("copyToClipboard", "Symptôme(s):\n\nTel:\n\nPoste:")
}

function triggerRelance1FDP(){
    window.api.send("copyToClipboard", "Nous venons de tenter de vous joindre concernant le traitement de votre ticket.\nPourriez-vous revenir vers notre support afin de finaliser celui-ci ?\nVous pouvez nous joindre au 01.41.28.84.31 ou bien par retour de mail à la notification que vous venez de recevoir !\nMerci de votre compréhension.\nLe Support Informatique")
}

function triggerRelance2FDP(){
    window.api.send("copyToClipboard", "Nous venons de tenter de vous joindre pour la seconde fois concernant le traitement de votre ticket.\nPourriez-vous revenir vers notre support afin de finaliser celui-ci ?\nVous pouvez nous joindre au 01.41.28.84.31 ou bien par retour de mail à la notification que vous venez de recevoir !\nMerci de votre compréhension.\nLe Support Informatique")
}

function triggerRelance3FDP(){
    window.api.send("copyToClipboard", "Nous venons de tenter de vous joindre pour la troisième fois concernant le traitement de votre ticket.\nMalgré nos tentatives et sans retour de votre part nous nous permettons de clore celui-ci sans donner suite à son traitement.\nMerci de votre compréhension.\nLe Support Informatique")

}

function triggerResolvingComment(){
    window.api.send("copyToClipboard", "Bonjour, suite à plusieurs tentatives de relances de notre part sans succès, nous nous permettons de clore ce ticket sans donner suite au traitement de celui-ci.\nMerci de votre compréhension\nLe Support Informatique")
}

function triggerOOS(){
    window.api.send("copyToClipboard", "L'application XXX n'est pas dans le périmètre du service desk.\nMerci de vous rediriger vers le CCRV.\n\nCordialement,\nLe service desk\n01.41.28.84.31")
}

function alfrescoCCRV(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/francaise-de-patrimoine-fdp/wiki-page?title=[CONSIGNE]_-_Listes_des_applications_dans_le_perimetre_du_CCRV_et_de_la_FDJ");
}

function alfrescoEscalade(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/francaise-de-patrimoine-fdp/document-details?nodeRef=workspace://SpacesStore/7bf6e9b3-6b77-456e-95ff-774b60beda93");
}

function alfrescoRelanceSortante(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/francaise-de-patrimoine-fdp/wiki-page?title=[CONSIGNE]_Gestion_des_relances_sortantes");
}

function alfrescoRelanceEntrante(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/francaise-de-patrimoine-fdp/wiki-page?title=[CONSIGNE]_Gestion_des_relances_entrantes");
}

function resetWorkflow(){
    document.getElementById('reportedBy').checked = false;
    document.getElementById('téléphone').checked = false;
    document.getElementById('idMateriel').checked = false;
    document.getElementById('akheo').checked = false;
    document.getElementById('workNote').checked = false;
    document.getElementById('ciPosteMateriel').checked = false;
    document.getElementById('pièceJointe').checked = false;
    
}
