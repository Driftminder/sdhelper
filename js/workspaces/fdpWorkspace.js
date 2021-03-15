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
    windows.api.send("copyToClipboard", "Nous venons de tenter de vous joindre pour la troisième fois concernant le traitement de votre ticket.\nMalgré nos tentatives et sans retour de votre part nous nous permettons de clore celui-ci sans donner suite à son traitement.\nMerci de votre compréhension.\nLe Support Informatique")

}

function triggerResolvingComment(){
    window.api.send("copyToClipboard", "Bonjour, suite à plusieurs tentatives de relances de notre part sans succès, nous nous permettons de clore ce ticket sans donner suite au traitement de celui-ci.\nMerci de votre compréhension\nLe Support Informatique")
}

function triggerOOS(){
    window.api.send("copyToClipboard", "L'application XXX n'est pas dans le périmètre du service desk.\nMerci de vous rediriger vers le CCRV.\n\nCordialement,\nLe service desk\n01.41.28.84.31")
}



