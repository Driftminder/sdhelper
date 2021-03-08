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
    var fulldate = new Date(Date.now()).toLocaleString().split(", ")
    var date = fulldate[0]
    var time = fulldate[1].split(":")[0]+":"+fulldate[1].split(":")[1]
    var readableMode 
    console.log(selectedTicketMode);
    switch(selectedTicketMode){
        case modes.TEL:
            readableMode = "TEL"
            break;
        case modes.MAIL:
            readableMode = "MAIL"
            break;
    }
    window.api.send("copyToClipboard", `PAC GCO le ${date} à ${time} ${readableMode}\nNom :\nPrénom :\nN° Tél. :\nSite :\nPoste :`)
}

function triggerRelance2AZ(){
    window.api.send("copyToClipboards", "")
}