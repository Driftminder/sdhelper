function triggerAEPNRP1(){
    window.api.send("copyToClipboard", "[Relance sortante n°X] / NRP / MEVO / MAIL\nXème relance effectuée vers utilisateur");
}

function triggerRelance1AEP(){
    window.api.send("copyToClipboard", `Bonjour,\n\nle support informatique a tenté de vous joindre concernant le dossier N°${document.getElementById("ticket").value != "" ? document.getElementById("ticket").value : "XXX"} au sujet de XXXXX. Nous vous invitons à nous recontacter au 01.55.50.22.63 afin de traiter votre dossier au plus vite.\n\nCordialement\n\nSupport Informatique AEP`);
}

function triggerRelance2AEP(){
    window.api.send("copyToClipboard", `Bonjour,\n\nle support informatique a tenté de vous joindre concernant le dossier N°${document.getElementById("ticket").value != "" ? document.getElementById("ticket").value : "XXX"} au sujet de XXXXX. Nous vous invitons à nous recontacter au 01.55.50.22.63 afin de traiter votre dossier au plus vite.\n\nCordialement\n\nSupport Informatique AEP`);
}

function triggerRelance3AEP(){
    window.api.send("copyToClipboard",`L'assistance informatique a tenté de vous joindre une 3ème fois concernant le ticket ${document.getElementById("ticket").value != "" ? document.getElementById("ticket").value : "XXX"} au sujet de XXX. N'ayant pas eu de réponse à nos précédentes relances, nous allons résoudre votre dossier.\n\nSupport Informatique AEP\nTél: 01.55.50.22.63`);
}

function triggerADGroup(){
    window.api.send("copyToClipboard","MSG-AEP Tous; GG-REP-Lecteur-H; GG-APP-Base-commun; ACM-1-03 (PSO); GG-APCTX-MainApp");
}

function triggerAccountNote(){
    window.api.send("copyToClipboard","[Journal de travail]\n\n\nCréation de compte AD : OK\nAjout du script de session : OK\nAjout des groupes : OK\nCréation du dossier personnel : OK\nCréation de l'adresse mail : OK");
}

function triggerRedirection(){
    window.api.send("copyToClipboard","Mise en place de la redirection des mails AEP vers la boite mail BNP effectuée");
}

function alfrescoRelanceEntrante(){
    window.api.send("navigateur","https://ged.e2rsc.econocom.com/share/page/site/aep-aep/wiki-page?title=[CONSIGNE]_Gestion_des_relances_entrantes_par_le_SD");
}

function alfrescoRelanceSortante(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/aep-aep/wiki-page?title=[CONSIGNE]_Gestion_des_relances_sortantes_par_le_SD");
}

function alfrescoEscalade(){
    window.api.send("navigateur", "https://ged.e2rsc.econocom.com/share/page/site/aep-aep/document-details?nodeRef=workspace://SpacesStore/85fbe113-54d3-4052-905f-a17bb4b194a9");
}

function helperAlert(){
    window.alert("GESTION DES SOLLICITATIONS  - Mise à disposition de TAG pour la gestion des appels entrants & sortants dans les journaux\nDans le même principe de ce qui a déjà été réalisé sur les autres contextes (dernièrement sur FDP), nous vous mettons ci-dessous à disposition différents TAG qui vous serviront à tracer vos activités entrantes et sortantes dans vos tickets. L'objectif est de pouvoir uniformiser toutes les notes qui seront inscrites dans les différents journaux et ainsi suivre plus facilement l'activité globale sur ce contexte AEP.\nVoici les différents TAG que vous devrez utiliser dans le journal privé désormais pour tracer vos appels entrants et sortants :\n    - [Appel entrant utilisateur] : permet de tracer toute sollicitation téléphonique entrante d'utilisateur sur un ticket en cours (hors relance ou suite à création de ticket)\n  - [Relance entrante utilisateur] : permet de tracer toute relance téléphonique entrante d'utilisateur sur un ticket en cours\n  - [Journal de travail] : permet de tracer toute information liée au diagnostic suite à la création d'un ticket ou aux actions effectuées pour les demandes GHAIA\n\nConcernant les relances sortantes que vous devez faire sur vos tickets, voici les différents TAG que vous aurez à inscrire dans le journal privé des tickets concernés :\n  - [Relance sortante n°1] : première relance effectuée vers utilisateur\n    - [Relance sortante n°2] : deuxième relance effectuée vers utilisateur\n    - [Relance sortante n°3] : troisième et dernière relance effectuée vers utilisateur\n\nBien évidemment, pour les utilisateurs injoignables, un mail sera généré dans l'outil via le journal public dans lequel vous préciserez que vous avez tenté de joindre l'utilisateur.\
    Comme SAADOUN, KARIM l'a précisé lors du dernier Weekly, une solution est en cours d'étude sur l'outil ITOP pour automatiser l'ensemble des ces actions mais en attendant nous vous demandons de bien appliquer ces différents TAG dès vos prochains tickets.");
}

function clotureMessage(){
    window.api.send("copyToClipboard", "Bonjour,\n\nLe sujet a été traité via les demandes ITOP R-XXXXXX & R-XXXXXX.\n\nNous nous permettons de clore cet incident qui n'a plus lieu d'être.")
}

function triggerEndingNote(){
    window.api.send("copyToClipboard", "Bonjour,\n\nNous venons de procéder à la création de votre compte AEP ainsi que de votre boite mail AEP qui n'étaient plus présents jusqu'à ce jour dans nos outils d'administration AEP.\n\nUn mail vous a été envoyé en parallèle indiquant votre mot de passe provisoire.\n\nPour le modifier, nous vous invitons à le changer depuis le lien suivant: https://citrix-new-aep-assurance.is.echonet/vpn/index.html\n\nEn cas de difficulté, merci de prendre contact avec notre support AEP au 01 50 55 22 63.")
}
