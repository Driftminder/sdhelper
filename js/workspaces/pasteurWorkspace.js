
function getTechName(){
    var techName = document.getElementById("techName").value != "" ? document.getElementById("techName").value : "XXX"
    return techName
}

function switchLanguage(){
  buttonZoneFR = document.getElementById("buttonZoneFR");
  buttonZoneEN = document.getElementById("buttonZoneEN");
  console.log(buttonZoneEN)
  console.log(buttonZoneFR)

  if(buttonZoneFR.style.display === "block"){
      console.log("Affichage Anglais")
      buttonZoneFR.style.display = "none";
      buttonZoneEN.style.display = "block";
      console.log(buttonZoneEN)
      console.log(buttonZoneFR)
  } else if (buttonZoneFR.style.display === "none"){
    console.log("Affichage Français")
    buttonZoneFR.style.display = "block";
    buttonZoneEN.style.display = "none";
    console.log(buttonZoneEN)
    console.log(buttonZoneFR)

  }
}

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

function closingNote(){
    window.api.send("copyToClipboard", "Bonjour,\n\nN'ayant pas eu de retour suite à mes trois relances, je permets de résoudre votre dossier.\n\nSi le problème est toujours d'actualité, je vous invite à nous recontacter au 01 40 61 36 00.\n\nCordialement,\n\nXXX\n\nTechnicien Support Utilisateur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours")
}

function modelRelancePasteur(techName){
    techName = getTechName()
    window.api.send("copyToClipboard", `Bonjour,\n\nJ'ai tenté de vous joindre concernant le ticket XXXX pour XXXX. Je vous invite à me recontacter au 01 40 61 36 00 afin de traiter votre dossier au plus vite.\n\nCordialement,\n\n${techName}\n\nTechnicien Support Utilisateur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelRelancePasteurEN(techName){
    techName = getTechName()
    window.api.send("copyToClipboard", `Hello Mister/Mrs,\n\nWe have tried to call you back about the ticket N°XXXXXX for XXXXXX. Could you please contact us at this number : 01.40.61.36.00 to process your ticket a soon as possible\n\nBest regards,\n\n${techName}\n\nIT Pasteur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelRelancePasteurj4EN(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Hello Mr/Mrs, We have tried to call you back about the ticket N°XXXXXX for XXXXXX, however we dont had answer to our 2 last reminder, so we will close your ticket. Could you please call us at this number : 01 40 61 36 00 to proceed your ticket as soon as possible.\n\nBest regards,\n\n${techName}\n\nIT Pasteur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelRelancePasteurj4(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Bonjour MR/MME, nous vous rappelons concernant le dossier N°XXXXXX au sujet de XXXXXX, n'ayant pas eu de retour à nos deux précédentes relances nous allons résoudre votre dossier. Pourriez-vous nous recontacter au 01 40 61 36 00 afin de traiter votre dossier au plus vite\n\nCordialement,\n\n${techName}\n\nTechnicien Support Utilisateur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelRelancePasteurj4vip(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Bonjour MR/MME, nous vous rappelons concernant le dossier N°XXXXXX au sujet de XXXXXX, n'ayant pas eu de retour à nos deux précedentes relances nous allons envoyer votre dossier à la proximité\n\nCordialement,\n\n${techName}\n\nTechnicien Support Utilisateur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelRelancePasteurj4vipEN(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Hello Mr/Mrs, We have tried to call you back about the ticket N°XXXXXX au sujet de XXXXXX, however we dont had answer to our 2 last reminder, so we will send your ticket to the proximity support\n\nBest regards,\n\n${techName}\n\nIT Pasteur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelRelancePasteurj6(){
    techName = getTechName()
    window.api.send("copyToClipboard", `L'assistance informatique a tenté de vous joindre à de multiple reprises mais sans succès. N'ayant pas eu de réponse à nos précédentes relances, nous nous permettons de fermer votre dossier\n\nCordialement,\n\n${techName}\n\nTechnicien Support Utilisateur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelRelancePasteurj6EN(){
    techName = getTechName()
    window.api.send("copyToClipboard", `The IT tried to call you back multiple time without success. Not having answer to our 2 last reminder, we are closing your ticket\n\nBest regards,\n\n${techName}\n\nIT Pasteur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelProlongationPasteur(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Bonjour,\n\nNous avons reçu une demande de prolongation de compte de xxx dont vous êtes le responsable.\n\nPour donner suite à cette demande, nous avons besoin de votre accord.\n\nValidez-vous cette demande ?\n\nCordialement,\n\n${techName}\n\nTechnicien Support Utilisateur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelProlongationPasteurEN(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Hello,\n\nWe received a request for an account's extension about xxx who is under your responsability.\n\nTo follow up to this request, we need your agreement.\n\nDo you validate this request?\n\nCordialement,\n\n${techName}\n\nIT Pasteur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelInfoProlongationPasteur(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Bonjour,\n\nAfin de pouvoir répondre favoriablement à votre demande, nous avons besoin des informations suivante :\n\n- nom et prénom de la personne :\n- statut de la personne (doctorant, post-doc, OREX,  etc...) :\n- nouvel organisme employeur (si connu) :\n- date du départ :\n- raison du départ (fin CDD, mobilité, ..) :\n- motif de la prolongation :\n- type d'utilisation du compte informatique pendant la prolongation (accès au stockage, aux ressources de calcul, utilisation de l'email,...) :\n- durée de la prolongation :\n- entité et nom du responsable :\nET l'accord écrit du responsable (en réponse à ce mail)\nLes prolongations de compte sont accordées pour 3 mois, renouvelable une fois.\n\nCordialement,\n\n${techName}\n\nTechnicien Support Utilisateur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelInfoProlongationPasteurEN(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Hello,\n\nTo respond favorably to your request, we need the following information :\n\n- First and last name :\n- Person status(doctorant, post-doc, OREX,  etc...) :\n- new employer (if known) :\n- departure date :\n- departure reason (end of contract, mobility, ..) :\n- Extension reason :\n- Type of using for the extension (Storage access, compute resource, mailing use,...) :\n- Extension duration :\n- Responsible entity :\nAND a signed agreement for the responsible (In answer of this Email)\nThe extension duration is for 3 month, renewable once.\n\nCordialement,\n\n${techName}\n\nIT Support\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelValidationAdressSecour(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Bonjour,\n\nMME/MR XXX a oublié son mot de passe Pasteur, elle ne peut donc plus accéder à ses ressources (email, portail de service...).\n\nPour des raisons de sécurité, le service informatique ne peut pas envoyer un nouveau mot de passe pour MME/MR XXX car son adresse mail personnelle n'est pas référencée.\n\nPouvez-vous valider son adresse mail personnelle : jcremesty@gmail.com afin qu'on puisse continuer le traitement de cet incident ?\n\nCordialement,\n\n${techName}\n\nTechnicien Support Utilisateur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelAlias(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Bonjour,\n\nL'Alias xxxx@pasteur.fr a été créé et les membres ont été ajoutés.\n\nVous avez été ajouté en tant que "Propriétaire" sur cet Alias, vous avez donc la possibilité d'ajouter ou de supprimer des membres internes.\n\nLes membres externes doivent être créés par la DSI auparavant.\n\nVous trouverez ci-joint la procédure pour la gestion des Alias.\n\nCordialement,\n\n${techName}\n\nTechnicien Support Utilisateur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelAliasEN(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Hello,\n\nThe alias is successfuly create and members had been added\n\nYou are added in terme of "Owner" on this alias, so you can add or remove internal members\n\nThe external members should be create by the DSI before.\n\nYou will find attach to this email the process to manage alias.\n\nBest Regards,\n\n${techName}\n\nIT Pasteur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelValidationGaia(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Bonjour,\n\nNous avons reçu une demande de droits d'accès sur l'espace GAIA XXX pour XXX dont vous êtes le responsable de cette unité.\nPour donner suite à cette demande, nous avons besoin de votre accord.\nValidez-vous cette demande ?\n\nCordialement,\n${techName}\nService informatique de l'Institut Pasteur\nTél : 01 40 61 36 00`)
}

function modelValidationGaiaEN(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Hello,\n\nWe received a request for access right in GAIA Storage XXXX for Mr/Mrs XXXXX for a unit of which you are responsible\nTo follow up this request, we need your agreement.\nCould you validate this request ?\n\nBest regards,\n${techName}\nIT Pasteur\nTél : 01 40 61 36 00`)
}

function modelFlowjo(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Bonjour,\n\nAfin de finaliser votre demande d'accès au logiciel FlowJo, nous avons besoin des informations suivantes :\n\n- Nom de l'unité :\n  - Code entité :\n- Point de contact du poste :\n - Adresse MAC :\n NB : Pas de poste personnel\n\nPouvez-vous nous retourner ces informations en mettant en copie l'adresse mail : admin-flowjo@pasteur.fr ?\n\nCordialement,\n\n${techName}\n\nTechnicien Support Utilisateur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelFlowjo(){
    techName = getTechName()
    window.api.send("copyToClipboard", `Hello,\n\nTo finalize your request of acces right for the FlowJo software, we need the following information :\n\n- Unity name :\n  - Entity code :\n- Point of contact for the computer :\n - MAC Address :\n PS : No personnal computer allowed\n\nCould you send the respons to this email with the following address in copy : admin-flowjo@pasteur.fr ?\n\nBest Regards,\n\n${techName}\n\nIT Pasteur\n\nTel :01 40 61 36 00\n\n39 Rue de la Milletière, 37100, Tours`)
}

function modelGraphpad(){
    window.api.send("copyToClipboard", "")
}

